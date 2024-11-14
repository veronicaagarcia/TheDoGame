import { Box } from '@mui/material'
import { modalProps } from '../../types'

export const ModalGuau = ({ principal: info }: modalProps) => {
	return (
		<Box
			component='img'
			src={info}
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				border: 'none',
				boxShadow: 1,
				borderRadius: 2,
				maxHeight: '90%',
				maxWidth: '90%',
				objectFit: 'contain',
			}}
		/>
	)
}