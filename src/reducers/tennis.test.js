import tennisReducer from './tennis';

describe('TennisReducer', () => {
  describe('when initializing', () => {
    const players = { player1:{ score:0 }, player2:{ score :0 }, name: 'Love-All'}

    it('sets a initial state', () => {
      expect(tennisReducer(undefined, {})).toEqual(players);
    });

  });
});
