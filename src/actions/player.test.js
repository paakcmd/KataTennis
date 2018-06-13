import { CREATE_PLAYERS } from './constants';
import { createPlayers } from './player';

it('creates an action to initialize the players', () => {
  const expectedAction = { type: CREATE_PLAYERS }

  expect(createPlayers()).toEqual(expectedAction);
})
