import { INCREASE_SCORE } from '../actions/constants';
import { updateScore } from '../domain-logic/score-update'

const initialState = { p1: 0, p2: 0 }

const tennis = ( state = initialState, action ) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return updateScore(state, action.player)
    default:
      return state;
  }
}

export default tennis;
