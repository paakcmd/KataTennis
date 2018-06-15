import { UPDATE_SCORE } from '../actions/constants';

const initialState =
{
  player1:{ score: 0 },
  player2:{ score: 0 },
  name: 'Love-All'
}

const tennis = ( state = initialState, action ) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.payload;
    default:
      return state;

  }
}

export default tennis;
