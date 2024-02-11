import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LangProvider } from '../src/context/LangContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<LangProvider>
		<App />
	</LangProvider>
)
