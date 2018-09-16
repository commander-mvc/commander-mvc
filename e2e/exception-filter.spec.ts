import { OtherExceptionFilter } from './fixtures/exception-filter/other-exception.filter'
import { MyExceptionFilter } from './fixtures/exception-filter/my-exception.filter'
import { runProgram } from '@e2e/helpers/run-program'
import { initializer } from '@e2e/fixtures/exception-filter/initializer'
import { AnyExceptionFilter } from '@e2e/fixtures/exception-filter/any-exception.filter'

const myError = 'My Error'
const myCatch = jest.spyOn(MyExceptionFilter.prototype, 'catch').mockName('myCatch')
const otherCatch = jest.spyOn(OtherExceptionFilter.prototype, 'catch').mockName('otherCatch')
const catchAll = jest.spyOn(AnyExceptionFilter.prototype, 'catch').mockName('catchAll')
const log = jest.spyOn(console, 'log').mockName('log')

describe('exception filter', () => {
  test('my exception', async () => {
    await runTestWithArgs(['test', '--exception', myError])
    expect(myCatch.mock.calls[0][0].message).toEqual('My Error')
    expect(log).not.toHaveBeenCalled()
  })
  test('other exception', async () => {
    await runTestWithArgs(['test'])
    expect(otherCatch.mock.calls[0][0].message).toEqual('OtherException')
    expect(log).not.toHaveBeenCalled()
  })
  test('catch-all exception', async () => {
    await runTestWithArgs(['test', '--unknown-exception'])
    expect(catchAll).toHaveBeenCalled()
    expect(log).not.toHaveBeenCalled()
  })
})

async function runTestWithArgs (args) {
  await runProgram(initializer(), ...args)
}
