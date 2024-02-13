import {
	Button,
	Card,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Modal,
	Typography,
} from '@mui/material'
import { Toaster, toast } from 'sonner'
import JSConfetti from 'js-confetti'
import { useQuestionsStore } from '../store/questions'
import { Footer } from './common/Footer'
import { Lives } from './Lives'
import { Bones } from './PetFootScore'
import { FormattedMessage } from 'react-intl'
import { useState } from 'react'
import { ModalHelp } from './common/ModalHelp'
import { Question } from './Question'
import { styleCardsGame } from '../styles/styles'

export function Game() {
	const jsConfetti = new JSConfetti()

	const questions = useQuestionsStore((state) => state.questions)
	const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
	const answer = useQuestionsStore((state) => state.answer)
	const selectAnswer = useQuestionsStore((state) => state.selectAnswer)
	const userSelectedAnswer = useQuestionsStore(
		(state) => state.userSelectedAnswer
	)
	const correctAnswer = useQuestionsStore((state) => state.correctAnswer)

	const questionInfo = questions[currentQuestion]
	const [help, setHelp] = useState('')
	const [openModalHelp, setOpenModalHelp] = useState<boolean>(false)

	const handleModalHelp = () => {
		setOpenModalHelp((openModalHelp) => !openModalHelp)
		handleHelp()
	}
	const handleHelp = () => {
		const breedAnswer = questionInfo.split('breeds/')
		const correctAns = breedAnswer[breedAnswer.length - 1].split('/')[0]

		const nuevoArray = answer.filter((an) => an !== correctAns)
		const deleteOneOption = nuevoArray[1]

		if (deleteOneOption && deleteOneOption !== correctAns) {
			setHelp(deleteOneOption)
		} else {
			setHelp(nuevoArray[2])
		}
	}
	const handleClick = (index: number) => () => {
		selectAnswer(index, questionInfo)
	}
	const backgroundColor = (index: number) => () => {
		if (userSelectedAnswer === '') return 'transparent'
		if (answer[index] !== correctAnswer && answer[index] !== userSelectedAnswer)
			return 'transparent'
		if (answer[index] === correctAnswer && answer[index] !== userSelectedAnswer)
			return 'transparent'
		if (answer[index] !== correctAnswer) {
			toast.error(
				<Typography component='h2'>
					<FormattedMessage
						id='BadDog'
						defaultMessage={`Bad dog!. The correct answerd is ${correctAnswer.toUpperCase()}`}
					/>
					{correctAnswer.toUpperCase()}
				</Typography>
			)
			return 'tomato'
		}
		if (answer[index] === correctAnswer) {
			toast.success(
				<Typography component='h2'>
					<FormattedMessage
						id='GoodDog'
						defaultMessage={`Very good, this is my dog!! Take a bone`}
					/>
				</Typography>
			)
			jsConfetti.addConfetti({
				emojis: ['🦴'],
				emojiSize: 100,
				confettiNumber: 30,
			})
			return '#a2cf6e'
		}
	}

	return (
		<Container>
			<Modal open={openModalHelp} onClose={handleModalHelp}>
				<ModalHelp principal={help} />
			</Modal>
			<Container
				maxWidth='md'
				className='responsive'
				style={{ height: 'auto' }}
			>
				<Question info={questionInfo} />
				<Toaster richColors position='bottom-center' />
				<Card variant='elevation' className='cardGame' sx={styleCardsGame}>
					<List disablePadding>
						{answer.map((ans, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton
									disabled={userSelectedAnswer !== ''}
									sx={{ backgroundColor: backgroundColor(index) }}
									onClick={handleClick(index)}
								>
									<ListItemText
										id='answerBreed'
										primary={ans.toUpperCase()}
										sx={{ textAlign: 'center', color: '#a16048' }}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
					{userSelectedAnswer === '' ? (
						<Button
							onClick={() => handleModalHelp()}
							variant='outlined'
							color='secondary'
						>
							<FormattedMessage id='Help' defaultMessage='Help' />
						</Button>
					) : (
						<Button variant='outlined' color='secondary' disabled>
							<FormattedMessage id='Help' defaultMessage='Help' />
						</Button>
					)}
				</Card>
			</Container>
			<div className='LivesScore'>
				<Lives />
				<Bones />
			</div>
			<Footer />
		</Container>
	)
}
