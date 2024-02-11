import { Container, Typography } from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { Start } from './components/Start'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'
import './App.css'
import { HeaderLang } from './components/common/HeaderLang'

function App() {
	const logoG = '../src/assets/logoG.png'
	const { questions, lifes, currentQuestion } = useQuestionsStore(
		(state) => state
	)

	return (
		<Container maxWidth='md'>
			<HeaderLang />
			{lifes === 0 ||
			(questions.length !== 0 && questions.length === currentQuestion) ? (
				<GameOver />
			) : (
				<>
					<Typography variant='h2' component='h1' className='title'>
						D O
						<img width={120} height={120} src={logoG} className='logo' />A M E
					</Typography>
					{questions.length === 0 ? <Start /> : <Game />}
				</>
			)}
		</Container>
	)
}

export default App
