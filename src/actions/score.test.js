import { scoreUpdater } from './score';
import { INCREASE_SCORE } from './constants';

describe('score', () => {
  it('increases p1 score when player equals to p1', () => {
    const expectedAction = { type: INCREASE_SCORE, player: 'p1' }
    expect(scoreUpdater('p1')).toEqual(expectedAction);
  });

  it('increases p2 score when player equals to p1', () => {
    const expectedAction = { type: INCREASE_SCORE, player: 'p2' }
    expect(scoreUpdater('p2')).toEqual(expectedAction);
  })
})
