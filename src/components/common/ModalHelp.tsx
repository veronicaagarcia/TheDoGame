import { Box, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { modalProps } from '../../types'
import { styleModelText } from '../../styles/styles'

export const ModalHelp = ({ principal: help }: modalProps) => {
	return (
		<Box sx={styleModelText}>
			<Typography component='h2'>
				<FormattedMessage
					id='HelpText'
					defaultMessage={`Pay attention, obsly is not a${help}`}
				/>
				{help}
			</Typography>
		</Box>
	)
}
