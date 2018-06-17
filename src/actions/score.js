import { INCREASE_SCORE_P1, INCREASE_SCORE_P2 } from './constants';

export const scoreUpdater = (player, p1_score, p2_score) => {
  if(player === 'p1') {
    return {
      type: INCREASE_SCORE_P1
    }
  }
  else {
    return {
      type: INCREASE_SCORE_P2
    }
  }

}
