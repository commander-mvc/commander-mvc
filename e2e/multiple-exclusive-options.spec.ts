import { CustomEntryPoint } from './fixtures/multiple-exclusive-options/custom-entry-point'
import { provideService } from '@e2e/fixtures/multiple-exclusive-options/provide-service'
import { runProgram } from '@e2e/helpers/run-program'
import { Runnable } from '@app/lib/interfaces/runnable.interface'
import { Constructor } from '../node_modules/awilix'
import { initializer } from '@e2e/fixtures/multiple-exclusive-options/initializer'

describe('multiple exclusive options', () => {
  test('one', async () => testOption('one'))
  test('two', async () => testOption('two'))
  test('custom entry point', async () => testOption('one', CustomEntryPoint))
})

async function testOption (option: string, entryPoint?: Constructor<Runnable>) {
  const input = 'three'
  const service = provideService({ option })
  await runProgram(initializer(entryPoint), 'test', `--${option}`, input)
  expect(service.calculate).toHaveBeenCalledWith(input)
  expect(service.display).toHaveBeenCalledWith(`${input} ${option}`)
}
