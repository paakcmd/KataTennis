import { UPDATE_SCORE } from './constants';

export const scoreUpdater = (p1_score, p2_score) => {
  let name = '';
  const scores = [ [0, 0, 'Love-ALL'], [0, 1, 'Love-Fifteen'], [1, 0, 'Fifteen-Love'], [1, 1, 'Fifteen-ALL'],
  [2, 0, 'Thirty-Love'], [2, 1, 'Thirty-Fifteen'], [2, 2, 'Thirty-ALL'], [3, 0, 'Forty-Love'], [3, 1, 'Forty-Fifteen'],
  [3, 2, 'Forty-Thirty'], [3, 3, 'Deuce']
 ]

  if(p1_score <= 3 && p2_score <= 3) {
    scores.map( score => {
      if(p1_score == score[0] && p2_score == score[1]){
        name = score[2]
      }
    })
  }

  if(p1_score > 3 || p2_score > 3) {
    const score_diff = Math.abs(p1_score - p2_score);
    if(score_diff == 1) {
      name = "Advantage"
    }
    else if (score_diff >= 2) {
      if(p1_score - p2_score > 0) {
        name = "Player1 Won";
      }
      else {
        name = "Player2 Won";
      }
    }
  }

  return {
    type: UPDATE_SCORE,
    payload: { player1:{ score:p1_score }, player2:{ score :p2_score }, name: name }
  }
}
