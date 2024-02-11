import { Card, Typography } from '@mui/material'
import { ButtonReset } from './common/ButtonReset'
import { useQuestionsStore } from '../store/questions'

export function Dead() {
	const funnyDog = './src/assets/deadDog.png'
	const userName = useQuestionsStore((state) => state.userName)

	return (
		<>
			<Typography variant='h4' component='h3' color='#93627b'>
				You are dead
			</Typography>
			<br />
			<img width={120} height={120} src={funnyDog} alt='Buu' />
			<Card
				className='gradient-background'
				variant='outlined'
				sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
			>
				<Typography variant='h5' component='h4'>
					I don't know what you were thinking{' '}
					{userName !== '' ? userName : 'Foolish person'}, you're not like
					cats... you don't have nine lives.
				</Typography>
			</Card>
			<br />
			<ButtonReset text={'revive'} />
		</>
	)
}
