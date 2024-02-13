import { Card, Typography } from '@mui/material'
import { ButtonReset } from './common/ButtonReset'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'
import funnyDog from '../assets/img/deadDog.png'

export function Dead() {
	const userName = useQuestionsStore((state) => state.userName)

	return (
		<>
			<Typography component='h3' color='#93627b'>
				<FormattedMessage id='Dead' defaultMessage='You are dead' />
			</Typography>
			<br />
			<img width={120} height={120} src={funnyDog} alt='Buu' />
			<Card
				className='gradient-background'
				variant='outlined'
				sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
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
