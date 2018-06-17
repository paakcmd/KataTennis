import { scoreUpdater } from './score';
import { INCREASE_SCORE_P1, INCREASE_SCORE_P2 } from './constants';

describe('score', () => {
  it('increases p1 score when player equals to p1', () => {
    const expectedAction = { type: INCREASE_SCORE_P1 }
    expect(scoreUpdater('p1')).toEqual(expectedAction);
  });

  it('increases p2 score when player equals to p1', () => {
    const expectedAction = { type: INCREASE_SCORE_P2 }
    expect(scoreUpdater('p2')).toEqual(expectedAction);
  })

})
