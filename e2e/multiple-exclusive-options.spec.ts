import { provideService } from '@e2e/fixtures/multiple-exclusive-options/provide-service'
import { runProgram } from '@e2e/helpers/run-program'
import { initializeIocContext } from '@e2e/fixtures/multiple-exclusive-options/initialize-ioc-context'

describe('multiple exclusive options', () => {
  test('--one', async () => testOption('one'))
  test('--two', async () => testOption('two'))
})

async function testOption (option: string) {
  const input = 'three'
  const service = provideService({ option })
  await runProgram(initializeIocContext, 'test', `--${option}`, input)
  expect(service.calculate).toHaveBeenCalledWith(input)
  expect(service.display).toHaveBeenCalledWith(`${input} ${option}`)
}
