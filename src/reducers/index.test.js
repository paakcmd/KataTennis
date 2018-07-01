import rootReducer from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ tennis: { p1: 0, p2: 0 } });
  });
});
