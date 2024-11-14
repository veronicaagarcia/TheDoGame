import { useQuestionsStore } from '../../store/questions'
import { Stack, IconButton, Button, Typography } from '@mui/material'
import { ArrowForwardIosSharp } from '@mui/icons-material'
import { FormattedMessage } from 'react-intl'
import '../../App.css'

export function Footer() {
  const { currentQuestion, questions, goNextQuestion, reset } = useQuestionsStore()

  const isLastQuestion = currentQuestion + 1 === questions.length

  return (
    <footer className="footer-margin">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ color: '#bd8266', mt: 2, pb: 2 }}
      >
        <Button onClick={reset} variant="contained" color="secondary">
          <FormattedMessage id="Reset" defaultMessage="Reset" />
        </Button>
        <IconButton
          size="small"
          color="secondary"
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <Typography variant="button" sx={{ mr: 1 }}>
            {isLastQuestion ? (
              <FormattedMessage id="SeeScore" defaultMessage="See score" />
            ) : (
              <FormattedMessage id="Next" defaultMessage="Next" />
            )}
          </Typography>
          <ArrowForwardIosSharp />
        </IconButton>
      </Stack>
    </footer>
  )
}