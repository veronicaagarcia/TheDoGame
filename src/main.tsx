import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LangProvider } from './context/LangContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<LangProvider>
		<App />
	</LangProvider>
)
