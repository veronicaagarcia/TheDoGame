import { Box, Button, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { modalProps } from '../../types'
import { styleModelText } from '../../styles/styles'
import { Loader } from './Loader'
import { useQuestionsStore } from '../../store/questions'
import { ArrowCircleRightOutlined } from '@mui/icons-material'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext'

export const ModalInfo = ({ principal: randomInfo }: modalProps) => {
	const loader = useQuestionsStore((state) => state.loader)
	const isEn = useContext(LangContext)

	return (
		<Box sx={styleModelText}>
			{loader ? (
				<Loader />
			) : (
				<Typography component='h3'>{randomInfo}</Typography>
			)}
			{isEn?.isEn === false && (
				<>
					<hr color='secondary' />
					<Typography component='h6' color='primary'>
						<FormattedMessage
							id='InfoText'
							defaultMessage={`Don't be lazy and learn some English. But if you want to search for this translation, copy the content and paste in the following link`}
						/>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								marginTop: '20px',
								alignContent: 'center',
							}}
						>
							<Button
								variant='contained'
								color='info'
								onClick={() => navigator.clipboard.writeText(randomInfo)}
							>
								<FormattedMessage id='Copy' defaultMessage={`Copy`} />
							</Button>
							<ArrowCircleRightOutlined color='info' />
							<Button variant='contained' color='info'>
								<a href='https://translate.google.com/?hl=es' target='_blank'>
									<FormattedMessage id='Go' defaultMessage={`Go`} />
								</a>
							</Button>
						</div>
					</Typography>
				</>
			)}
		</Box>
	)
}
