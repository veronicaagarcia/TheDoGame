import { Card, Typography } from '@mui/material'
import { ButtonReset } from './common/ButtonReset'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'
import funnyDog from '../assets/img/deadDog.png'

export function Dead() {
	const userName = useQuestionsStore((state) => state.userName)

	return (
		<>
			<Typography component='h3' color='secondary'>
				<FormattedMessage id='Dead' defaultMessage='You are dead' />
			</Typography>
			<br />
			<img width={120} height={120} src={funnyDog} alt='Buu' />
			<Card
				variant="outlined"
        sx={{ backgroundColor: '#202020', color: '#bd8266', textAlign: 'center', m: 2, p: 3, width:'60%' }}
			>
				<Typography component='h4'>
					{userName !== '' ? (
						userName
					) : (
						<FormattedMessage
							id='foolishPerson'
							defaultMessage='foolish person '
						/>
					)}
					<FormattedMessage
						id='DeadText'
						defaultMessage=" , I don't know what you were thinking. You're not like cats... you don't have nine lives. Idiot!"
					/>
				</Typography>
			</Card>
			<br />
			<ButtonReset text={'revive'} />
		</>
	)
}
