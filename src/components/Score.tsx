import { Card, Typography, Box } from '@mui/material'
import { FormattedMessage } from 'react-intl'

interface ScoreProps {
  text: string
  score: number
}

export function Score({ text, score }: ScoreProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        <FormattedMessage 
          id="Score" 
          defaultMessage="Score: {score}"
          values={{ score }}
        />
      </Typography>
      <Card
        variant="outlined"
        sx={{ 
          color: '#f6dfbf', 
          textAlign: 'center', 
          p: 3,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="body1">
          <FormattedMessage
            id="ScoreMessage"
            defaultMessage={text}
          />
        </Typography>
      </Card>
    </Box>
  )
}