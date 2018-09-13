import { some } from 'lodash'

export function calledWithIncludes (spy: jest.MockInstance<any>, match: string) {
  const regex = new RegExp(match)
  return some(spy.mock.calls, (input) => regex.test(input[0]))
}
