import { create } from "zustand"
import { persist } from "zustand/middleware"
// import { type Question } from "../types"

interface State {
    questions: string[]
    currentQuestion: number
    fetchQuestions: () => Promise<void>
    answer: string[]
    selectAnswer: (index: number, questionInfo:string) => void
    userSelectedAnswer: string
    correctAnswer: string
    goNextQuestion: () => void
    lifes: number
    bones: number
    score: number
    reset: () => void
    loader: boolean
    getUserName: (name:string) => void
    userName: string
}

export const useQuestionsStore = create<State>()(persist((set, get)=>{
    return {
        questions: [],
        currentQuestion: 0,
        answer: [],
        lifes: 3,
        bones:0,
        userSelectedAnswer: '',
        correctAnswer:'',
        score: 0,
        loader:false,
        userName:'',
        fetchQuestions: async () => {
            set({loader: true})
            const res = await fetch('https://dog.ceo/api/breeds/image/random/6')
            const json = await res.json()
            const question = json.message
            const questions = question.sort(()=> Math.random() - 0.6).slice(0, 6)
            set({questions})
            set({loader: false})
            let breedDogs : string[] = [];
            for (const q of question) {
                const breed = q.split('breeds/')
                const breedDog = breed[breed.length - 1].split('/')[0]
                breedDogs= [...breedDogs, breedDog].sort()
            }
            set({answer : breedDogs})
        },
        selectAnswer: (index, questionInfo) => {
            const { answer,lifes, score, bones } = get() 
            const breedSelected = answer[index]
            const breedAnswer = questionInfo.split('breeds/')
            const correctAns = breedAnswer[breedAnswer.length - 1].split('/')[0]

            set({userSelectedAnswer: breedSelected})
            set({correctAnswer: correctAns})
            if (breedSelected !== correctAns){
                set({lifes: lifes - 1 })
            } else {
                set({score: score + 1})
                set({bones: bones + 1})
            }
        },
        goNextQuestion: () => {
            const {currentQuestion, questions} = get()
            const nextQ = currentQuestion + 1

            if(nextQ <= questions.length) {
                set({currentQuestion: nextQ})
            }
            if(currentQuestion === questions.length){
                set({currentQuestion: questions.length})
            }
            const { fetchQuestions } = get()
            fetchQuestions()
            set({userSelectedAnswer: ''})
        },
        getUserName : (name) => {
            set({userName: name})
        },
        reset: () => {
           set({currentQuestion:0, questions:[], score: 0, lifes:3, userSelectedAnswer:'', userName: '', bones:0})
        }
    }
},{
    name: 'doGame'
}))