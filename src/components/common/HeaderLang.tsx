import { Button } from '@mui/material'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext.jsx'

export function HeaderLang() {
	const lang = useContext(LangContext)
	// console.log(lang, 'idioma')
	return (
		<header style={{ paddingBottom: 12 }}>
			<Button
				onClick={() => lang?.setLang('es-AR')}
				variant='outlined'
				color='inherit'
				sx={{ m: 1 }}
			>
				ES
			</Button>
			<Button
				onClick={() => lang?.setLang('en-US')}
				variant='outlined'
				color='inherit'
				sx={{ m: 1 }}
			>
				EN
			</Button>
		</header>
	)
}
