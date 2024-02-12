import { useQuestionsStore } from '../../store/questions'
import { Stack, IconButton, Button } from '@mui/material'
import { ArrowForwardIosSharp } from '@mui/icons-material'
// import { ButtonReset } from './ButtonReset'
import { FormattedMessage } from 'react-intl'

export function Footer() {
	const { currentQuestion, questions, goNextQuestion } = useQuestionsStore(
		(state) => state
	)
	const reset = useQuestionsStore((state) => state.reset)
	return (
		<footer style={{ position: 'static', bottom: 0 }}>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				color='#bd8266'
			>
				{/* <ButtonReset text='Reset' /> */}
				<Button onClick={() => reset()} variant='contained' color='inherit'>
					<FormattedMessage id='Reset' defaultMessage='Reset' />
				</Button>
				<IconButton
					size='small'
					color='inherit'
					onClick={goNextQuestion}
					disabled={currentQuestion > questions.length - 1}
				>
					{currentQuestion + 1 === questions.length ? (
						<FormattedMessage id='SeeScore' defaultMessage='See score' />
					) : (
						<FormattedMessage id='Next' defaultMessage='Next' />
					)}
					<ArrowForwardIosSharp />
				</IconButton>
			</Stack>
		</footer>
	)
}
