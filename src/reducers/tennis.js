import { UPDATE_SCORE } from '../actions/constants';

const tennis = ( state = { player1:{ score:0 }, player2:{ score :0 }, name: 'Love-All' }, action ) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.payload;
    default:
      return state;

  }
}

export default tennis;
