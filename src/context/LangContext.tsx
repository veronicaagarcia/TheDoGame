import React, { createContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import mensajesEs from '../lang/es-AR.json'
import mensajesEn from '../lang/en-US.json'
import { ContextType } from '../types'

export const LangContext = createContext<ContextType | undefined>(undefined)

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	let localDef
	let messageDef
	const lang = localStorage.getItem('lang')

	if (lang) {
		localDef = lang

		if (lang === 'es-AR') {
			messageDef = mensajesEs
		} else if (lang === 'en-US') {
			messageDef = mensajesEn
		} else {
			localDef = 'en-US'
			messageDef = mensajesEn
		}
	}

	const [message, setMessage] = useState(messageDef)
	const [local, setLocal] = useState(localDef)
	const [isEn, setIsEn] = useState(false)

	const setLang = (lang: string) => {
		switch (lang) {
			case 'en-US':
				setMessage(mensajesEn)
				setLocal('en-US')
				setIsEn(true)
				localStorage.setItem('lang', 'en-US')
				break
			case 'es-AR':
				setMessage(mensajesEs)
				setLocal('es-AR')
				setIsEn(false)
				localStorage.setItem('lang', 'es-AR')
				break
			default:
				setMessage(mensajesEn)
				setLocal('en-US')
				setIsEn(true)
				localStorage.setItem('lang', 'en-US')
		}
	}

	return (
		<LangContext.Provider value={{ setLang: setLang, isEn: isEn }}>
			<IntlProvider locale={local} messages={message}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	)
}
