import { scoreUpdater } from './score';
import { UPDATE_SCORE } from './constants';

describe('score', () => {

  const scores = [ [0, 0, 'Love-ALL'], [0, 1, 'Love-Fifteen'], [1, 0, 'Fifteen-Love'], [1, 1, 'Fifteen-ALL'],
  [2, 0, 'Thirty-Love'], [2, 1, 'Thirty-Fifteen'], [2, 2, 'Thirty-ALL'], [3, 0, 'Forty-Love'], [3, 1, 'Forty-Fifteen'],
  [3, 2, 'Forty-Thirty'], [3, 3, 'Forty-ALL'] ]

  scores.map( score => {
    it(`scores a ${score[0]} - ${score[1]}`, () => {
      const expectedAction = {
        type: UPDATE_SCORE,
        payload: { player1:{ score:score[0] }, player2:{ score :score[1] }, name: score[2] }
      }

      expect(scoreUpdater(score[0],score[1],score[2])).toEqual(expectedAction);
    })
  })



})
