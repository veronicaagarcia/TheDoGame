import { Button, Card, Typography, Box } from '@mui/material'
import { Dead } from './Dead'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'

export function GameOver() {
  const { lifes, score, userName, reset } = useQuestionsStore()

  const renderScoreMessage = () => {
    if (score <= 2) {
      return (
        <FormattedMessage
          id="BdScore"
          defaultMessage="Oh back off Satan! Kitty worshiper. You don't deserve a ball or a bone. Now each of us will sniff out your stinky michis smell and we will chase you {name}"
          values={{ name: userName || <FormattedMessage id="foolishPerson" defaultMessage="foolish person" /> }}
        />
      )
    } else if (score < 5) {
      return (
        <FormattedMessage
          id="mediumScor"
          defaultMessage="Well, you're not a witless and you could do more for our kind...we allow you to live {name}"
          values={{ name: userName || <FormattedMessage id="foolishPerson" defaultMessage="foolish person" /> }}
        />
      )
    } else {
      return (
        <FormattedMessage
          id="goodScor"
          defaultMessage="Genius! bright! Well you're a bit of a sycophant. I think you love us too much. We allow you to be our favorite human, {name}"
          values={{ name: userName || <FormattedMessage id="foolishPerson" defaultMessage="foolish person" /> }}
        />
      )
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 , marginTop: '50px', height: '100%', paddingBottom: '50px'}}>
      <Typography variant="h4" sx={{textAlign:'center'}}>
        <FormattedMessage id="GameOver" defaultMessage="GAME OVER" />
      </Typography>
      {lifes === 0 && score === 0 ? (
        <Dead />
      ) : (
        <>
          <Typography variant="h5" color="secondary">
            <FormattedMessage id="Score" defaultMessage="Score:" /> {score}
          </Typography>
          <Card
            variant="outlined"
            sx={{ backgroundColor: '#202020', color: '#bd8266', textAlign: 'center', m: 2, p: 3, width:'60%' }}
          >
            <Typography variant="body1">{renderScoreMessage()}</Typography>
          </Card>
          <Button onClick={reset} variant="contained" color="secondary">
            <FormattedMessage id="PlayAgainov" defaultMessage="Play again" />
          </Button>
        </>
      )}
    </Box>
  )
}