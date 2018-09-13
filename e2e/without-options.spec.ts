import { provideDoService } from '@e2e/fixtures/common/provide-do-service'
import { runProgram } from '@e2e/helpers/run-program'
import { initializer } from '@e2e/fixtures/without-options/initializer'

const arg = 'the-arg'

describe('controller without options', () => {
  test('works', async () => {
    const service = provideDoService()
    await runProgram(initializer(), 'test', arg)
    expect(service.do).toHaveBeenCalledWith(arg)
  })
})
