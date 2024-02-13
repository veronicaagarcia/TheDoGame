import { Button, Container, Typography } from '@mui/material'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext.jsx'
import logoG from '../../assets/img/logoG.png'

export function HeaderLang() {
	const lang = useContext(LangContext)

	return (
		<Container>
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<Button
					onClick={() => lang?.setLang('es-AR')}
					variant='outlined'
					color='inherit'
					sx={{
						m: 1,
						':hover': {
							backgroundColor: 'whitesmoke',
						},
					}}
				>
					ES
				</Button>
				<Button
					onClick={() => lang?.setLang('en-US')}
					variant='outlined'
					color='inherit'
					sx={{
						m: 1,
						':hover': {
							backgroundColor: 'whitesmoke',
						},
					}}
				>
					EN
				</Button>
			</div>
			<Typography component='h1' className='title'>
				D O
				<img width={100} height={90} src={logoG} className='logo' />A M E
			</Typography>
		</Container>
	)
}
