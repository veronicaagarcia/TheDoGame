import {
	Box,
	Card,
	Container,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material'
import { Toaster, toast } from 'sonner'
import JSConfetti from 'js-confetti'
import { useQuestionsStore } from '../store/questions'
import { Footer } from './Footer'
import { Loader } from './Loader'
import { Lives } from './Lives'
import { Bones } from './Bones'
import { FormattedMessage } from 'react-intl'

const jsConfetti = new JSConfetti()

const Question = ({ info }: { info: string }) => {
	const loader = useQuestionsStore((state) => state.loader)
	return (
		<Card
			variant='elevation'
			sx={{
				marginTop: 4,
				bgcolor: '#f6dfbf',
				p: 2,
				textAlign: 'center',
				maxWidth: '380px',
			}}
		>
			<Typography variant='h5' component='h4' color='#93627b'>
				<FormattedMessage id='ChooseBreed' defaultMessage='CHOOSE THE BREED' />
			</Typography>
			{loader ? (
				<Loader />
			) : (
				<Box
					component='img'
					src={info}
					sx={{
						boxShadow: 1,
						borderRadius: 4,
						maxWidth: '100%',
						height: 'auto',
						padding: 0,
						margin: 0,
					}}
				/>
			)}
		</Card>
	)
}

export function Game() {
	const {
		questions,
		currentQuestion,
		answer,
		selectAnswer,
		userSelectedAnswer,
		correctAnswer,
	} = useQuestionsStore((state) => state)
	const questionInfo = questions[currentQuestion]

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
				`Bad dog!. The correct answerd is ${correctAnswer.toUpperCase()}`
			)
			return 'tomato'
		}
		if (answer[index] === correctAnswer) {
			toast.success('Very good, this is my dog!! Take a bone')
			jsConfetti.addConfetti({
				emojis: ['🦴'],
				emojiSize: 100,
				confettiNumber: 30,
			})
			return '#a2cf6e'
		}
	}

	return (
		<Container maxWidth='md'>
			<Container maxWidth='md' className='responsive'>
				<Question info={questionInfo} />
				<Toaster richColors position='bottom-center' />
				<Card
					variant='elevation'
					sx={{
						marginTop: 4,
						bgcolor: '#f6dfbf',
						p: 2,
						textAlign: 'center',
						fontSize: 14,
						maxWidth: '380px',
						paddingTop: 4,
					}}
				>
					<List disablePadding>
						{answer.map((ans, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton
									disabled={userSelectedAnswer !== ''}
									sx={{ backgroundColor: backgroundColor(index) }}
									onClick={handleClick(index)}
								>
									<ListItemText
										primary={ans.toUpperCase()}
										sx={{ textAlign: 'center', color: '#a16048' }}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Card>
			</Container>
			<Lives />
			<Bones />
			<Footer />
		</Container>
	)
}
