const nameInterpret = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
}

const beforeFirstAdvantageInterpret = (p1Score, p2Score) => {
  const name1 = nameInterpret[p1Score]
  const name2 = nameInterpret[p2Score]

  if(name1 === name2){
    const name = name1 + '-ALL';
    if(name === 'Forty-ALL') {
      return 'Deuce';
    } else {
      return name
    }
  }
  else {
    return name1 + '-' + name2;
  }
}

const greaterThan40Interpret = (p1Score, p2Score) => {
  const score_diff = Math.abs(p1Score - p2Score);
  
  if(score_diff === 1) {
    return 'Advantage';
  } else if (score_diff >= 2) {
    if(p1Score - p2Score > 0) {
      return 'Player1 Won';
    }
    else {
      return 'Player2 Won';
    }
  }
  else {
    return 'Deuce';
  }
}

export const scoreInterpret = (p1Score, p2Score) => {
  const isBeforeFirstAdvantage = p1Score <= 3 && p2Score <= 3

  if(isBeforeFirstAdvantage) {
    return beforeFirstAdvantageInterpret(p1Score, p2Score)
  }
  else {
    return greaterThan40Interpret(p1Score, p2Score)
  }

  return '';
}
