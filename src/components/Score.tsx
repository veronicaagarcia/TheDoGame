import { Card, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

interface propScore {
	text: string
	score: number
}

export function Score({ text, score }: propScore) {
	return (
		<>
			<Typography component='h3' color='#93627b'>
				<FormattedMessage id='Score' defaultMessage='Score:' />
				{score}
			</Typography>
			<Card
				className='gradient-background'
				variant='outlined'
				sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
			>
				<Typography component='h4'>{text}</Typography>
			</Card>
		</>
	)
}
