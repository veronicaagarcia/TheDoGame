import { CircularProgress, Box } from '@mui/material'

export function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <CircularProgress color="primary" />
    </Box>
  )
}