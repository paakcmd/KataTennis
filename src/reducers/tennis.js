import { CREATE_PLAYERS } from '../actions/constants';


const tennis = ( state = {}, action ) => {
  switch (action.type) {
    case CREATE_PLAYERS:
      return state = { player1:{ score:0 }, player2:{ score :0 } }
    default:
      return state;

  }
}

export default tennis;
