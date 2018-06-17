import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ tennis: { player1:{ score:0 }, player2:{ score :0 }}});
  });
});
