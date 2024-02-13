import { Box, Button, Card, Modal, Typography } from '@mui/material'
import { Loader } from './common/Loader'
import { ModalInfo } from './common/ModalInfo'
import { ModalGuau } from './common/ModalGuau'
import { useQuestionsStore } from '../store/questions'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { styleCardsGame } from '../styles/styles'

export function Question({ info }: { info: string }) {
	const loader = useQuestionsStore((state) => state.loader)
	const fetchFacts = useQuestionsStore((state) => state.fetchFacts)
	const randomInfo = useQuestionsStore((state) => state.randomInfo)
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [openModalGuau, setOpenModalGuau] = useState<boolean>(false)

	const handleModal = () => {
		setOpenModal((openModal: unknown) => !openModal)
		fetchFacts()
	}
	const handleModalGuau = () => {
		setOpenModalGuau((openModalGuau: unknown) => !openModalGuau)
	}

	return (
		<Card className='cardGame' variant='elevation' sx={styleCardsGame}>
			<Typography component='h4' color='#93627b'>
				<FormattedMessage id='ChooseBreed' defaultMessage='CHOOSE THE BREED' />
			</Typography>
			<br />
			{loader ? (
				<Loader />
			) : (
				<Box
					component='img'
					src={info}
					sx={{
						boxShadow: 1,
						cursor: 'pointer',
						borderRadius: 4,
						height: '203px',
						width: '196px',
						padding: 0,
						margin: 0,
						':hover': {
							boxShadow: 6,
						},
					}}
					onClick={() => handleModalGuau()}
				/>
			)}
			<br />
			<br />
			<Button onClick={() => handleModal()} variant='outlined' color='info'>
				<FormattedMessage id='CuriousFacts' defaultMessage='Curious facts' />
			</Button>
			<Modal open={openModal} onClose={handleModal}>
				<ModalInfo principal={randomInfo} />
			</Modal>
			<Modal open={openModalGuau} onClose={handleModalGuau}>
				<ModalGuau principal={info} />
			</Modal>
		</Card>
	)
}
