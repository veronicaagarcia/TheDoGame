import { useQuestionsStore } from './store/questions'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import { HeaderLang } from './components/common/HeaderLang'
import './App.css'
import { RealFooter } from './components/common/RealFooter'

export default function App() {
  const { questions, lifes, currentQuestion } = useQuestionsStore()

  const juegoTerminado = lifes === 0 || (questions.length !== 0 && questions.length === currentQuestion)
  const juegoIniciado = questions.length > 0

  return (
    <main className="contenedor-app">
      <HeaderLang />
      {juegoTerminado ? (
        <GameOver />
      ) : juegoIniciado ? (
        <Game />
      ) : (
        <Start />
      )}
      <RealFooter />
    </main>
  )
}