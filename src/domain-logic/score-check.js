export const WIN = 'WIN'
export const ADV = 'ADV'
export const DEUCE_SCORE = 40

export const isDeuce = currentScore => 
  Object
    .values(currentScore)
    .every(score => score === DEUCE_SCORE)

export const isAdv = currentScore => 
  Object
    .values(currentScore)
    .some(score => score === ADV)

export const isGameEnded = currentScore => 
  Object
    .values(currentScore)
    .some(score => score === WIN)
