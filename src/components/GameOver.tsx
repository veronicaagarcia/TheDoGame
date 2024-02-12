import { Button, Card, Typography } from '@mui/material'
// import { ButtonReset } from './common/ButtonReset'
import { Dead } from './Dead'
import { useQuestionsStore } from '../store/questions'
import { FormattedMessage } from 'react-intl'

export function GameOver() {
	const lifes = useQuestionsStore((state) => state.lifes)
	const score = useQuestionsStore((state) => state.score)
	const userName = useQuestionsStore((state) => state.userName)
	const reset = useQuestionsStore((state) => state.reset)

	return (
		<>
			<Typography component='h2'>
				<FormattedMessage id='GameOver' defaultMessage='GAME OVER' />
			</Typography>
			<hr />
			{lifes === 0 && score === 0 ? (
				<Dead />
			) : (
				<>
					{/* {score <= 2 && <Score text={badScor} score={score} />}
					{score > 2 && score < 5 && <Score text={mediumScor} score={score} />}
					{score >= 5 && <Score text={goodScor} score={score} />} */}

					{score <= 2 && (
						<>
							<Typography component='h3' color='#93627b'>
								<FormattedMessage id='Score' defaultMessage='Score:' />
								{score}
							</Typography>
							<Card
								className='gradient-background'
								variant='outlined'
								sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
							>
								<Typography component='h4'>
									<FormattedMessage
										id='BdScore'
										defaultMessage="Oh back off Satan! Kitty worshiper. You don't deserve a ball or a bone. Now each of us will sniff out your stinky michis smell and we will chase you "
									/>
									{userName !== '' ? (
										userName
									) : (
										<FormattedMessage
											id='foolishPerson'
											defaultMessage='foolish person '
										/>
									)}
								</Typography>
							</Card>
						</>
					)}
					{score > 2 && score < 5 && (
						<>
							<Typography component='h3' color='#93627b'>
								<FormattedMessage id='Score' defaultMessage='Score:' />
								{score}
							</Typography>
							<Card
								className='gradient-background'
								variant='outlined'
								sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
							>
								<Typography component='h4'>
									<FormattedMessage
										id='mediumScor'
										defaultMessage="Well, you're not a witless and you could do more for our kind...we allow you to live "
									/>
									{userName !== '' ? (
										userName
									) : (
										<FormattedMessage
											id='foolishPerson'
											defaultMessage='foolish person '
										/>
									)}
								</Typography>
							</Card>
						</>
					)}
					{score >= 5 && (
						<>
							<Typography component='h3' color='#93627b'>
								<FormattedMessage id='Score' defaultMessage='Score:' />
								{score}
							</Typography>
							<Card
								className='gradient-background'
								variant='outlined'
								sx={{ color: '#f6dfbf', textAlign: 'center', m: 5, p: 5 }}
							>
								<Typography component='h4'>
									<FormattedMessage
										id='goodScor'
										defaultMessage="Genius! bright! Well you're a bit of a sycophant. I think you love us too much. We allow you to be our favorite human, "
									/>
									{userName !== '' ? (
										userName
									) : (
										<FormattedMessage
											id='foolishPerson'
											defaultMessage='foolish person '
										/>
									)}
								</Typography>
							</Card>
						</>
					)}
					<hr />
					<Button onClick={() => reset()} variant='contained' color='inherit'>
						<FormattedMessage id='PlayAgainov' defaultMessage='Play again' />
					</Button>
				</>
			)}
		</>
	)
}
