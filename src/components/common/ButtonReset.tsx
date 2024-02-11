import { Button } from '@mui/material'
import { useQuestionsStore } from '../../store/questions'
interface propText {
	text: string
}
export function ButtonReset({ text }: propText) {
	const reset = useQuestionsStore((state) => state.reset)

	return (
		<Button onClick={() => reset()} variant='contained' color='inherit'>
			{text}
		</Button>
	)
}
