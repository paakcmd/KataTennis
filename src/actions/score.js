import { UPDATE_SCORE } from './constants';

export const scoreUpdater = (player, p1_score, p2_score) => {

  let name = '';

  if(player === 'p1') {
    p1_score += 1;
  } else if (player === 'p2') {
    p2_score += 1;
  }



  const scores = [ [0, 0, 'Love-ALL'], [0, 1, 'Love-Fifteen'], [0, 2, 'Love-Thirty'], [0, 3, 'Love-Forty'], [1, 0, 'Fifteen-Love'],
  [1, 1, 'Fifteen-ALL'], [1, 2, 'Fifteen-Thirty'], [1, 3, 'Fifteen-Forty'], [2, 0, 'Thirty-Love'], [2, 1, 'Thirty-Fifteen'], [2, 2, 'Thirty-ALL'], 
  [2,3, 'Thirty-Forty'], [3, 0, 'Forty-Love'], [3, 1, 'Forty-Fifteen'], [3, 2, 'Forty-Thirty'], [3, 3, 'Deuce']]

  if(p1_score <= 3 && p2_score <= 3) {
    scores.forEach( score => {
      if(p1_score === score[0] && p2_score === score[1]){
        name = score[2]
      }
    })
  }

  if(p1_score > 3 || p2_score > 3) {
    const score_diff = Math.abs(p1_score - p2_score);
    if(score_diff === 1) {
      name = 'Advantage';
    } else if (score_diff >= 2) {
      if(p1_score - p2_score > 0) {
        name = 'Player1 Won';
      }
      else {
        name = 'Player2 Won';
      }
    } else {
      name = 'Deuce';
    }
  }

  return {
    type: UPDATE_SCORE,
    payload: { player1:{ score:p1_score }, player2:{ score : p2_score }, name: name }
  }
}
