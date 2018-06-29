import { displayScore } from './score-display';
import { WIN, ADV } from './score-check'

describe('score display', () => {
  // use newlines to make it easier to read
  const scores = [
    [0, 0, 'Love-ALL'],
    [0, 15, 'Love-Fifteen'],
    [0, 30, 'Love-Thirty'],
    [0, 40, 'Love-Forty'],
    [15, 0, 'Fifteen-Love'],
    [15, 15, 'Fifteen-ALL'],
    [15, 30, 'Fifteen-Thirty'],
    [15, 40, 'Fifteen-Forty'],
    [30, 0, 'Thirty-Love'],
    [30, 15, 'Thirty-Fifteen'],
    [30, 30, 'Thirty-ALL'],
    [30, 40, 'Thirty-Forty'],
    [40, 0, 'Forty-Love'],
    [40, 15, 'Forty-Fifteen'],
    [40, 30, 'Forty-Thirty'],
    [40, 40, 'Deuce'],
    [ADV, 40, 'Player1 Advantage'],
    [40, ADV, 'Player2 Advantage' ],
    [WIN, 0, 'Player1 Won'],
    [WIN, 15, 'Player1 Won'],
    [WIN, 30, 'Player1 Won'],
    [WIN, 40, 'Player1 Won'],
    [0, WIN, 'Player2 Won'],
    [15, WIN, 'Player2 Won'],
    [30, WIN, 'Player2 Won'],
    [40, WIN, 'Player2 Won'],
  ]

  scores.forEach( score => {
    it(`scores a ${score[0]} - ${score[1]}`, () => {
      expect(displayScore(score[0],score[1])).toEqual(score[2]);
    });
  });


})
