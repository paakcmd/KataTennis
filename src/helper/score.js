
export const scoreInterpret = (p1Score, p2Score) => {

  const nameInterpret = [ [0, 'Love'],[1, 'Fifteen'], [2, 'Thirty'], [3, 'Forty'] ];
  let name = '';
  let name1 = '';
  let name2 = '';

  if(p1Score <= 3 && p2Score <= 3) {

    nameInterpret.forEach( score => {
      if(score[0] === p1Score) {
        name1 = score[1]
      }
      if (score[0] === p2Score) {
        name2 = score[1]
      }
    })


    if(name1 === name2){
      name = name1 + '-ALL';
      if(name === 'Forty-ALL') {
        name = 'Deuce';
      }
    }
    else {
      name = name1 + '-' + name2;
    }

  }
  else {

    const score_diff = Math.abs(p1Score - p2Score);
    
    if(score_diff === 1) {
      name = 'Advantage';
    } else if (score_diff >= 2) {
      if(p1Score - p2Score > 0) {
        name = 'Player1 Won';
      }
      else {
        name = 'Player2 Won';
      }
    }
    else {
      name = 'Deuce';
    }

  }

  return name;

}
