import React, { useState, createContext, useContext, ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import mensajesEs from '../lang/es-AR.json'
import mensajesEn from '../lang/en-US.json'

type Lang = 'es-AR' | 'en-US'
type Messages = typeof mensajesEs | typeof mensajesEn

interface LangContextType {
  setLang: (lang: Lang) => void
  isEn: boolean
}

const LangContext = createContext<LangContextType | undefined>(undefined)

interface LangProviderProps {
  children: ReactNode
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Lang>(() => {
    const savedLang = localStorage.getItem('lang') as Lang
    return savedLang && (savedLang === 'es-AR' || savedLang === 'en-US') ? savedLang : 'en-US'
  })

  const [messages, setMessages] = useState<Messages>(() => 
    locale === 'es-AR' ? mensajesEs : mensajesEn
  )

  const [isEn, setIsEn] = useState(locale === 'en-US')

  const setLang = (lang: Lang) => {
    setLocale(lang)
    setMessages(lang === 'es-AR' ? mensajesEs : mensajesEn)
    setIsEn(lang === 'en-US')
    localStorage.setItem('lang', lang)
  }

  return (
    <LangContext.Provider value={{ setLang, isEn }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}

export const useLang = (): LangContextType => {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}