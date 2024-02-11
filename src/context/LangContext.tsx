import React, { createContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import mensajesEs from '../lang/es-AR.json'
import mensajesEn from '../lang/en-US.json'
import { ContextType } from '../types'

export const LangContext = createContext<ContextType | undefined>(undefined)

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [message, setMessage] = useState(mensajesEn)
	const [local, setLocal] = useState('en-US')

	const setLang = (lang: string) => {
		switch (lang) {
			case 'en-US':
				setMessage(mensajesEn)
				setLocal('en-US')
				break
			case 'es-AR':
				setMessage(mensajesEs)
				setLocal('es-AR')
				break
			default:
				setMessage(mensajesEn)
				setLocal('en-US')
		}
	}

	return (
		<LangContext.Provider value={{ setLang: setLang }}>
			<IntlProvider locale={local} messages={message}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	)
}
