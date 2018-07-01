import { WIN, ADV, DEUCE_SCORE, isDeuce, isAdv, isGameEnded } from './score-check'

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
  return { p1: DEUCE_SCORE, p2: DEUCE_SCORE }
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
