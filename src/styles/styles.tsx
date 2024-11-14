export const styleModelText = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'fit',
	bgcolor: '#ffffff',
	color: '#202020',
	boxShadow: 24,
	p: 6,
}

export const styleCardsGame = {
	bgcolor: '#bd8266',
	animation: 'cambioColor 5s infinite',
	textAlign: 'center',
	height: 'auto',
	padding: '16px',
	width: '90%',
}
const keyframes = ` @keyframes cambioColor { 0% { background-color: #bd8266; } 50% { background-color: #d57f6d; } 100% { background-color: #bd8266; } } `
const styleSheet = document.styleSheets[0]; styleSheet.insertRule(keyframes, styleSheet.cssRules.length)