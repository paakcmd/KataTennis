export const WIN = 'WIN'
export const ADV = 'ADV'

const DUECE_SCORE = 40

const isDeuce = currentScore => 
  Object
    .values(currentScore)
    .every(score => score === DUECE_SCORE)

const isAdv = currentScore => 
  Object
    .values(currentScore)
    .some(score => score === ADV)

const isGameEnded = currentScore => 
  Object
    .values(currentScore)
    .some(score => score === WIN)

const normalUpdate = (currentScore, scorer) => {
  const nextScoreOf = {
    0: 15,
    15: 30,
    30: 40,
    40: WIN
  }

  return {
    ...currentScore,
    [scorer]: nextScoreOf[currentScore[scorer]]
  }
}

const deuceUpdate = (currentScore, scorer) => ({
  ...currentScore,
  [scorer]: ADV
})

const advUpdate = (currentScore, scorer) => {
  if(currentScore[scorer] === ADV) {
    return {
      ...currentScore,
      [scorer]: WIN
    }
  }
  return { p1: DUECE_SCORE, p2: DUECE_SCORE }
}

export const updateScore = (currentScore, scorer) => {
  if(isGameEnded(currentScore)) {
    return currentScore
  }
  if(isDeuce(currentScore)) {
    return deuceUpdate(currentScore, scorer)
  }
  if(isAdv(currentScore)) {
    return advUpdate(currentScore, scorer)
  }
  return normalUpdate(currentScore, scorer)
}
