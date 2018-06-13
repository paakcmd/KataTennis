import { UPDATE_SCORE } from './constants';

export const scoreUpdater = (player1_score, player2_score, name) => {
  return {
    type: UPDATE_SCORE,
    payload: { player1:{ score:player1_score }, player2:{ score :player2_score }, name: name } 
  }
}
