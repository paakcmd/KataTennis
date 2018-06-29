import { INCREASE_SCORE_P1 ,INCREASE_SCORE_P2 } from '../actions/constants';
import { updateScore } from '../domain-logic/score-update'

const initialState = { p1: 0, p2: 0 }

const tennis = ( state = initialState, action ) => {
  switch (action.type) {
    case INCREASE_SCORE_P1:
      return updateScore(state, 'p1')
    case INCREASE_SCORE_P2:
      return updateScore(state, 'p2')
    default:
      return state;
  }
}

export default tennis;
