import { Typography } from '@mui/material'
import { Score } from './Score'
import { ButtonReset } from './common/ButtonReset'
import { Dead } from './Dead'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'

export function GameOver() {
	const lifes = useQuestionsStore((state) => state.lifes)
	const score = useQuestionsStore((state) => state.score)
	const userName = useQuestionsStore((state) => state.userName)

	const goodScor = `Genius! bright! Well you're a bit of a sycophant ${
		userName !== '' ? userName : 'foolish person'
	}, I think you love us too much. We allow you to be our favorite human.`
	const mediumScor = `Well, you're not a wimp and you could do more for our kind...${
		userName !== '' ? userName : 'foolish person'
	} we allow you to live.`
	const badScor = `Oh back off Satan! Kitty worshiper. You don't deserve a ball or a bone. Now each of us will sniff out your stinky michis smell and we will chase you ${
		userName !== '' ? userName : 'foolish person'
	}.`
	return (
		<>
			<Typography variant='h3' component='h2'>
				<FormattedMessage id='GameOver' defaultMessage='GAME OVER' />
			</Typography>
			<hr />
			{lifes === 0 && score === 0 ? (
				<Dead />
			) : (
				<>
					{score <= 2 && <Score text={badScor} score={score} />}
					{score > 2 && score < 5 && <Score text={mediumScor} score={score} />}
					{score >= 5 && <Score text={goodScor} score={score} />}
					<hr />
					<ButtonReset text={'Play again'} />

					{/* {'Play again'} */}
				</>
			)}
		</>
	)
}
