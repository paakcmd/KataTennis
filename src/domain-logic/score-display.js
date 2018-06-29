import { DEUCE_SCORE, ADV, WIN } from './score-update'

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

export const scoreInterpret = (p1Score, p2Score) => {
  const isDeuce = [p1Score, p2Score]
    .every(score => score === DEUCE_SCORE)

  if(isDeuce) {
    return DEUCE
  }

  if(p1Score === ADV) {
    return 'Player1 Advantage'
  }
  if(p2Score === ADV) {
    return 'Player2 Advantage'
  }

  if(p1Score === WIN) {
    return 'Player1 Won'
  }
  if(p2Score === WIN) {
    return 'Player2 Won'
  }

  return scorePair(labelOf[p1Score], labelOf[p2Score])
}
