/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react'
// import { IntlProvider } from 'react-intl'
// import mensajesEs from '../lang/es-AR.json'
// import mensajesEn from '../lang/en-US.json'

// const LangContext = React.createContext()

// const LangProvider = ({
// 	children
// }) => {
// 	let localDef
// 	let messageDef
// 	const lang = localStorage.getItem('lang')

// 	if (lang) {
// 		localDef = lang

// 		if (lang === 'es-AR') {
// 			messageDef = mensajesEs
// 		} else if (lang === 'en-US') {
// 			messageDef = mensajesEn
// 		} else {
// 			localDef = 'en-US'
// 			messageDef = mensajesEn
// 		}
// 	}

// 	const [message, setMessage] = useState(messageDef)
// 	const [locale, setLocale] = useState(localDef)
// 	const [isEn, setIsEn] = useState(false)

// 	const setLang = (lang: string) => {
// 		switch (lang) {
// 			case 'en-US':
// 				setMessage(mensajesEn)
// 				setLocale('en-US')
// 				setIsEn(true)
// 				localStorage.setItem('lang', 'en-US')
// 				break
// 			case 'es-AR':
// 				setMessage(mensajesEs)
// 				setLocale('es-AR')
// 				setIsEn(false)
// 				localStorage.setItem('lang', 'es-AR')
// 				break
// 			default:
// 				setMessage(mensajesEn)
// 				setLocale('en-US')
// 				setIsEn(true)
// 				localStorage.setItem('lang', 'en-US')
// 		}
// 	}

// 	return (
// 		<LangContext.Provider value={{ setLang: setLang, isEn: isEn }}>
// 			<IntlProvider locale={locale} messages={message}>
// 				{children}
// 			</IntlProvider>
// 		</LangContext.Provider>
// 	)
// }
// export {LangProvider, LangContext};

import React, { useState, FC, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import mensajesEs from '../lang/es-AR.json'
import mensajesEn from '../lang/en-US.json'

interface LangProviderProps {
	children: ReactNode
}

interface LangContextValue {
	setLang: (lang: string) => void
	isEn: boolean
}

const LangContext = React.createContext<LangContextValue | undefined>(undefined)

const LangProvider: FC<LangProviderProps> = ({ children }) => {
	let messageDef: any
	let localDef: string = ''
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
	const [locale, setLocale] = useState(localDef)
	const [isEn, setIsEn] = useState(false)

	const setLang = (lang: string) => {
		switch (lang) {
			case 'en-US':
				setMessage(mensajesEn)
				setLocale('en-US')
				setIsEn(true)
				localStorage.setItem('lang', 'en-US')
				break
			case 'es-AR':
				setMessage(mensajesEs)
				setLocale('es-AR')
				setIsEn(false)
				localStorage.setItem('lang', 'es-AR')
				break
			default:
				setMessage(mensajesEn)
				setLocale('en-US')
				setIsEn(true)
				localStorage.setItem('lang', 'en-US')
		}
	}

	return (
		<LangContext.Provider value={{ setLang, isEn }}>
			<IntlProvider locale={locale} messages={message}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	)
}

export { LangProvider, LangContext }
