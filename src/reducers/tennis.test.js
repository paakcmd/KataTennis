import tennisReducer from './tennis';
import { CREATE_PLAYERS } from '../actions/constants';

describe('playersReducer', () => {

  describe('when initializing', () => {
    const players = { player1:{ score:0 }, player2:{ score :0 }, name: 'Love-All'}

    it('sets a player', () => {
      expect(tennisReducer(undefined, { type: CREATE_PLAYERS })).toEqual(players);
    });

  });
});
