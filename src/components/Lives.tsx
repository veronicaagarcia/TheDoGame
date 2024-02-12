import { Favorite } from '@mui/icons-material'
import { Box, Rating, Typography } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'

export function Lives() {
	const lifes = useQuestionsStore((state) => state.lifes)
	return (
		<Box
			writing-mode='vertical-rl'
			text-orientation='upright'
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Typography component='legend' p={2}>
				<FormattedMessage id='Lives' defaultMessage='LIVES' />
			</Typography>
			<Rating
				name='read-only'
				value={lifes}
				max={3}
				icon={<Favorite color='error' />}
				emptyIcon={<Favorite fontSize='inherit' />}
				readOnly
			/>
		</Box>
	)
}
