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
				borderRadius: 20,
				width: '100%',
				height: 'auto',
				maxWidth: '400px',
				padding: 0,
				margin: 0,
			}}
		/>
	)
}
