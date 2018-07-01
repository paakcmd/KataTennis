import {ADV, WIN, isDeuce, isAdv, isGameEnded } from './score-check'

const labelOf = {
  0: 'Love',
  15: 'Fifteen',
  30: 'Thirty',
  40: 'Forty',
}

const ALL = 'ALL'
const DEUCE = 'Deuce'

const scorePair = (fst, snd) => fst === snd
  ? `${fst}-${ALL}`
  : `${fst}-${snd}`

const getPlayerThat = (status, currentScore) => {
  if(currentScore.p1 === status) {
    return 'Player1'
  }
  if(currentScore.p2 === status) {
    return 'Player2'
  }
}

export const displayScore = (currentScore) => {
  const { p1, p2 } = currentScore

  if(isDeuce(currentScore)) {
    return DEUCE
  }

  if(isAdv(currentScore)) {
    return `${getPlayerThat(ADV, currentScore)} Advantage`
  }

  if(isGameEnded(currentScore)) {
    return `${getPlayerThat(WIN, currentScore)} Won`
  }

  return scorePair(labelOf[p1], labelOf[p2])
}
