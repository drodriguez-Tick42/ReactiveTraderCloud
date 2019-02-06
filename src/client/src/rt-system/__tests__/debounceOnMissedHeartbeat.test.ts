import { debounceWithSelector } from 'rt-system'
import { TestScheduler } from 'rxjs/testing'
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable'
// import { of } from 'rxjs';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected)
})

describe('DebounceOnMissedHeartbeat', () => {
  it('should merge the source observable and also emit after due time', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const dueTime = 2
      const source$: ColdObservable<number> = cold('--a|', { a: 10 })
      const expected = '--b-(b|)'
      const obs = debounceWithSelector(dueTime, (x: number) => x)(source$)

      expectObservable(obs).toBe(expected, { b: 10 })
    })
  })
})
