import { Pets } from '@mui/icons-material'
import { Box, Rating, Typography } from '@mui/material'
import { useQuestionsStore } from '../store/questions'

export function Bones() {
	const bones = useQuestionsStore((state) => state.bones)
	return (
		<Box
			writing-mode='vertical-rl'
			text-orientation='upright'
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Typography variant='h6' component='legend' p={2}>
				SCORE
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
