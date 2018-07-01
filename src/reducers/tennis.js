import { INCREASE_SCORE_P1 ,INCREASE_SCORE_P2 } from '../actions/constants';

const initialState =
{
  player1:{ score: 0 },
  player2:{ score: 0 }
}

const tennis = ( state = initialState, action ) => {
  switch (action.type) {
    case INCREASE_SCORE_P1:
      const newScoreP1 = state.player1.score + 1;
      return { ...state, player1: { score: newScoreP1 } }
    case INCREASE_SCORE_P2:
      const newScoreP2 = state.player2.score + 1;
      return { ...state, player2: { score: newScoreP2 } }
    default:
      return state;

  }
}

export default tennis;
