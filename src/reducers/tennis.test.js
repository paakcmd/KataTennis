import tennisReducer from './tennis';
import { scoreUpdater } from '../actions/score';

describe('TennisReducer', () => {
  describe('when initializing', () => {
    const initialState = { p1: 0, p2: 0 }

    it('sets a initial state', () => {
      expect(tennisReducer(undefined, {})).toEqual(initialState);
    });

    it('increase p1 score', () => {
      const newStateP1 = {
        ...initialState,
        p1: 15
      }
      expect(tennisReducer(undefined, scoreUpdater('p1'))).toEqual(newStateP1);
    })

    it('increase p2 score', () => {
      const newStateP2 = {
        ...initialState,
        p2: 15
      }
      expect(tennisReducer(undefined, scoreUpdater('p2'))).toEqual(newStateP2);
    })

  });
});
