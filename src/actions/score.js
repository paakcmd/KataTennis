import { INCREASE_SCORE } from './constants';

export const scoreUpdater = (player) => ({ type: INCREASE_SCORE, player })
