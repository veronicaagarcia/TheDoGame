import { Pets } from '@mui/icons-material'
import { Box, Rating, Typography } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'

export function PetFootScore() {
	const bones = useQuestionsStore((state) => state.bones)
	return (
		<Box
    writing-mode='vertical-rl'
    text-orientation='upright'
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#202020' }}
		>
			<Typography component='legend' p={2}>
				<FormattedMessage id='Bones' defaultMessage='SCORE' />
			</Typography>
			<Rating
				name='read-only'
				value={bones}
				max={6}
				icon={<Pets color='secondary' />}
				emptyIcon={<Pets fontSize='inherit' />}
				readOnly
			/>
		</Box>
	)
}
