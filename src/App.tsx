import { Container } from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import { HeaderLang } from './components/common/HeaderLang'
import './App.css'

function App() {
	const questions = useQuestionsStore((state) => state.questions)
	const lifes = useQuestionsStore((state) => state.lifes)
	const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

	return (
		<Container>
			<HeaderLang />
			{lifes === 0 ||
			(questions.length !== 0 && questions.length === currentQuestion) ? (
				<GameOver />
			) : (
				<>{questions.length === 0 ? <Start /> : <Game />}</>
			)}
		</Container>
	)
}

export default App
