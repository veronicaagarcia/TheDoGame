import { Button } from '@mui/material'
import { useQuestionsStore } from '../../store/questions'
import { FormattedMessage } from 'react-intl'

interface ButtonResetProps {
  text: string
}

export function ButtonReset({ text }: ButtonResetProps) {
  const reset = useQuestionsStore(state => state.reset)

  return (
    <Button onClick={reset} variant="contained" color="secondary">
      <FormattedMessage id={text} defaultMessage={text} />
    </Button>
  )
}