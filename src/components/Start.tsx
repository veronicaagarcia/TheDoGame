import { Button, Input } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'
import { Label } from '@mui/icons-material'
// import mensajesEs from '../lang/es-AR.json'
// import mensajesEn from '../lang/en-US.json'
// import { LangContext } from '../context/LangContext.jsx'
// import { useContext } from 'react'

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
	// const idioma = useContext(LangContext)
	// console.log(idioma, 'idioma')
	return (
		<>
			<hr style={{ marginTop: '8px' }} />
			<label>
				<FormattedMessage
					id='Nickname'
					defaultMessage='Nickname if you were a pet'
				/>
			</label>
			<br />
			<Label />
			<Input sx={{ color: 'ivory' }} onChange={handleGetUser} autoFocus />
			<br />
			<br />
			<Button onClick={handleClick} variant='contained' color='inherit'>
				<FormattedMessage id='Start' defaultMessage='Start' />
			</Button>
		</>
	)
}
