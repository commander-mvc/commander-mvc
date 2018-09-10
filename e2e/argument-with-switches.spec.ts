import { provideService } from '@e2e/fixtures/argument-with-switches/provide-service'
import { runProgram } from '@e2e/helpers/run-program'
import { initializer } from '@e2e/fixtures/argument-with-switches/initializer'

const arg = 'the-arg'

describe('argument with switches', () => {
  test('one', async () => testOption('one'))
  test('two', async () => testOption('two'))
})

async function testOption (option: string) {
  const service = provideService()
  await runProgram(initializer(), 'test', arg, `--${option}`)
  expect(service.do).toHaveBeenCalledWith(`${arg} ${option}`)
}
