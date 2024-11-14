import { Button, TextField, Typography, Box } from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'
import { useState } from 'react'

export function Start() {
  const [userName, setUserName] = useState('')
  const { fetchQuestions, getUserName } = useQuestionsStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getUserName(userName)
    fetchQuestions()
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop:'200px' }}>
      <Typography variant="h6" sx={{color:'#ffffff'}}>
        <FormattedMessage id="Nickname" defaultMessage="Nickname if you were a pet" />
      </Typography>
      <TextField
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        variant="outlined"
        color="secondary"
        inputProps={{ 'aria-label': 'Nickname' }}
        sx={{width:'60%'}}
        autoFocus
      />
      <Button type="submit" variant="contained" color="secondary">
        <FormattedMessage id="Start" defaultMessage="Start" />
      </Button>
    </Box>
  )
}