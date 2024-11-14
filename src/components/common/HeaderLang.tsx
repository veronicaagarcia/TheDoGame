import { Button, Typography, Box } from '@mui/material'
import { useLang } from '../../context/LangContext'
import logoG from '../../assets/img/logoG.png'
import '../../App.css'

export function HeaderLang() {
  const { setLang } = useLang()

  const handleLangChange = (newLang: 'es-AR' | 'en-US') => {
    setLang(newLang)
  }

  return (
    <main className="contenedor-header">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Button
            onClick={() => handleLangChange('es-AR')}
            variant="outlined"
            color="secondary"
            sx={{ mr: 2 }}
          >
            ES
          </Button>
          <Button
            onClick={() => handleLangChange('en-US')}
            variant="outlined"
            color="secondary"
          >
            EN
          </Button>
        </Box>
        <Typography variant="h4" component="h1" className="title" sx={{ display: 'flex', alignItems: 'center' }}>
          D O
          <img width={50} height={50} src={logoG} className="logo" alt="Game logo" />
          A M E
        </Typography>
      </Box>
    </main>
  )
}