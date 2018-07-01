import { isDeuce, isAdv, isGameEnded, ADV, WIN } from './score-check'

const toString = JSON.stringify

describe('score check', () => {
  describe('.isDeuce', () => {
    const cases = [
      { currentScore: { p1: 15, p2: 15  }, result: false },
      { currentScore: { p1: 0, p2: 15  }, result: false },
      { currentScore: { p1: 40, p2: 40  }, result: true },
    ]
    cases.forEach(({ currentScore, result}) => {
      it(`returns ${result} when currentScore is ${toString(currentScore)}`, () => {
        expect(isDeuce(currentScore)).toBe(result)
      })
    })
  })

  describe('.isAdv', () => {
    const cases = [
      { currentScore: { p1: 15, p2: 15  }, result: false },
      { currentScore: { p1: 0, p2: 15  }, result: false },
      { currentScore: { p1: ADV, p2: 40  }, result: true },
      { currentScore: { p1: 40 , p2: ADV  }, result: true },
    ]
    cases.forEach(({ currentScore, result}) => {
      it(`returns ${result} when currentScore is ${toString(currentScore)}`, () => {
        expect(isAdv(currentScore)).toBe(result)
      })
    })
  })

  describe('.isGameEnded', () => {
    const cases = [
      { currentScore: { p1: 15, p2: 15  }, result: false },
      { currentScore: { p1: 0, p2: 15  }, result: false },
      { currentScore: { p1: 40, p2: 40  }, result: false },
      { currentScore: { p1: 40, p2: ADV  }, result: false },
      { currentScore: { p1: WIN, p2: 40  }, result: true },
      { currentScore: { p1: 40 , p2: WIN  }, result: true },
      { currentScore: { p1: 0 , p2: WIN  }, result: true },
      { currentScore: { p1: WIN , p2: 15  }, result: true },
    ]
    cases.forEach(({ currentScore, result}) => {
      it(`returns ${result} when currentScore is ${toString(currentScore)}`, () => {
        expect(isGameEnded(currentScore)).toBe(result)
      })
    })
  })
})
