import tennisReducer from './tennis';
import { INCREASE_SCORE_P1 ,INCREASE_SCORE_P2 } from '../actions/constants';

describe('TennisReducer', () => {
  describe('when initializing', () => {
    const initialState = { player1:{ score:0 }, player2:{ score :0 }}

    it('sets a initial state', () => {
      expect(tennisReducer(undefined, {})).toEqual(initialState);
    });

    it('incrase p1 score', () => {
      const newStateP1 = JSON.parse(JSON.stringify(initialState));
      newStateP1.player1.score += 1;
      expect(tennisReducer(undefined, { type: INCREASE_SCORE_P1 })).toEqual(newStateP1);
    })

    it('incrase p2 score', () => {
      const newStateP2 = JSON.parse(JSON.stringify(initialState));
      newStateP2.player2.score += 1;
      expect(tennisReducer(undefined, { type: INCREASE_SCORE_P2 })).toEqual(newStateP2);
    })

  });
});
