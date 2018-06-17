import tennisReducer from './tennis';
import { INCREASE_SCORE_P1 ,INCREASE_SCORE_P2 } from '../actions/constants';
import { scoreInterpret } from './helper/score';

describe('TennisReducer', () => {
  describe('when initializing', () => {
    const initialState = { player1:{ score:0 }, player2:{ score :0 }, name: 'Love-All'}

    it('sets a initial state', () => {
      expect(tennisReducer(undefined, {})).toEqual(initialState);
    });

    it('incrase p1 score', () => {
      const newStateP1 = copy.deepcopy(initialState);
      newStateP1.player1.score += 1;
      newStateP1.name = scoreInterpret( newStateP1.player1.score, newStateP1.player2.score );
      expect(tennisReducer(undefined, { type: INCREASE_SCORE_P1 })).toEqual(newStateP1);
    })

    it('incrase p2 score', () => {
      const newStateP2 = copy.deepcopy(initialState);
      newStateP2.player2.score += 1;
      newStateP2.name = scoreInterpret( newStateP2.player1.score, newStateP2.player2.score );
      expect(tennisReducer(undefined, { type: INCREASE_SCORE_P2 })).toEqual(newStateP2);
    })

  });
});
