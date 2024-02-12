import { Button, Input } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'
import { Label } from '@mui/icons-material'

export function Start() {
	const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
	const getUserName = useQuestionsStore((state) => state.getUserName)

	const handleGetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.value
		getUserName(name)
	}

	const handleClick = () => {
		fetchQuestions()
	}

	return (
		<>
			<hr style={{ marginTop: '8px' }} />
			<FormattedMessage
				id='Nickname'
				defaultMessage='Nickname if you were a pet'
			/>
			<br />
			<Label />
			<Input
				sx={{ color: 'ivory', marginBottom: 4 }}
				onChange={handleGetUser}
				autoFocus
			/>
			<br />
			<Button onClick={handleClick} variant='contained' color='inherit'>
				<FormattedMessage id='Start' defaultMessage='Start' />
			</Button>
		</>
	)
}
