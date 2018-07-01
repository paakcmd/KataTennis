import { updateScore } from './score-update';
import { WIN, ADV } from './score-check';

const toString = JSON.stringify

describe('score update', () => {
  describe('in normal game mode', () => {
    const cases = [
      { current: { p1: 0, p2: 0 }, scorer: 'p1', next: { p1: 15, p2: 0 } },
      { current: { p1: 15, p2: 0 }, scorer: 'p1', next: { p1: 30, p2: 0 } },
      { current: { p1: 30, p2: 0 }, scorer: 'p2', next: { p1: 30, p2: 15 } },
      { current: { p1: 30, p2: 15 }, scorer: 'p2', next: { p1: 30, p2: 30 } },
      { current: { p1: 30, p2: 30 }, scorer: 'p1', next: { p1: 40, p2: 30 } },
      { current: { p1: 40, p2: 30 }, scorer: 'p1', next: { p1: WIN, p2: 30 } },
      { current: { p1: 15, p2: 40 }, scorer: 'p2', next: { p1: 15, p2: WIN } },
    ]

    cases.forEach(({ current, scorer, next }) => {
      it(`updates score from ${toString(current)} to ${toString(next)} when scored by ${scorer}`, () => {
        expect(updateScore(current, scorer)).toEqual(next)
      });
    });
  })

  describe('in deuce mode', () => {
    const cases = [
      { current: { p1: 40, p2: 40 }, scorer: 'p1', next: { p1: ADV, p2: 40 } },
      { current: { p1: 40, p2: 40 }, scorer: 'p2', next: { p1: 40, p2: ADV } },
      { current: { p1: 40, p2: ADV }, scorer: 'p1', next: { p1: 40, p2: 40 } },
      { current: { p1: ADV, p2: 40 }, scorer: 'p2', next: { p1: 40, p2: 40 } },
      { current: { p1: ADV, p2: 40 }, scorer: 'p1', next: { p1: WIN, p2: 40 } },
      { current: { p1: 40, p2: ADV }, scorer: 'p2', next: { p1: 40, p2: WIN } },
    ]

    cases.forEach(({ current, scorer, next }) => {
      it(`updates score from ${toString(current)} to ${toString(next)} when scored by ${scorer}`, () => {
        expect(updateScore(current, scorer)).toEqual(next)
      });
    });
  })

  describe('after someone wins', () => {
    const cases = [
      { current: { p1: 30, p2: WIN }, scorer: 'p1', next: { p1: 30, p2: WIN } },
      { current: { p1: 0, p2: WIN }, scorer: 'p2', next: { p1: 0, p2: WIN } },
      { current: { p1: WIN, p2: 15 }, scorer: 'p1', next: { p1: WIN, p2: 15 } },
      { current: { p1: WIN, p2: 0 }, scorer: 'p2', next: { p1: WIN, p2: 0 } },
    ]

    cases.forEach(({ current, scorer, next }) => {
      it(`does not update anything`, () => {
        expect(updateScore(current, scorer)).toEqual(next)
      });
    });
  })
})
