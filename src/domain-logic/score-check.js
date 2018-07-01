export const WIN = 'WIN'
export const ADV = 'ADV'
export const DEUCE_SCORE = 40

const scoresFrom = Object.values

export const isDeuce = currentScore => 
  scoresFrom(currentScore)
    .every(score => score === DEUCE_SCORE)

export const isAdv = currentScore => 
  scoresFrom(currentScore)
    .some(score => score === ADV)

export const isGameEnded = currentScore => 
  scoresFrom(currentScore)
    .some(score => score === WIN)
