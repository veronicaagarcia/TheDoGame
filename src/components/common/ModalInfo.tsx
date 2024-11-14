import { Box, Button, Typography, Link } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { modalProps } from '../../types'
import { styleModelText } from '../../styles/styles'
import { Loader } from './Loader'
import { useQuestionsStore } from '../../store/questions'
import { ArrowCircleRightOutlined } from '@mui/icons-material'
import { useLang } from '../../context/LangContext'

export const ModalInfo = ({ principal: randomInfo }: modalProps) => {
  const loader = useQuestionsStore(state => state.loader)
  const { isEn } = useLang()

  const handleCopyText = () => {
    navigator.clipboard.writeText(randomInfo)
  }

  return (
    <Box sx={styleModelText}>
      {loader ? (
        <Loader />
      ) : (
        <Typography variant="body1">{randomInfo}</Typography>
      )}
      {!isEn && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="primary">
            <FormattedMessage
              id="InfoText"
              defaultMessage="Don't be lazy and learn some English. But if you want to search for this translation, copy the content and paste in the following link"
            />
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2, alignItems: 'center' }}>
            <Button variant="contained" color="info" onClick={handleCopyText}>
              <FormattedMessage id="Copy" defaultMessage="Copy" />
            </Button>
            <ArrowCircleRightOutlined color="info" />
            <Link
              href="https://translate.google.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="info">
                <FormattedMessage id="Go" defaultMessage="Go" />
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  )
}