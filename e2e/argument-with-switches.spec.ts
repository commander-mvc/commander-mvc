import { calledWithIncludes } from '@e2e/helpers/called-with-includes'
import { runProgram } from '@e2e/helpers/run-program'
import { initializer } from '@e2e/fixtures/argument-with-switches/initializer'
import { provideDoService } from '@e2e/fixtures/common/provide-do-service'
import { mockProcessExit } from '@e2e/helpers/mock-process-exit'
import { mockStdoutWrite } from '@e2e/helpers/mock-stdout-write'
import { mockConsoleError } from '@e2e/helpers/mock-console-error'
import { NAME, VERSION } from '@e2e/fixtures/multiple-exclusive-options/custom-entry-point'

const arg = 'the-arg'
let service

describe('argument with switches', () => {
  beforeEach(() => {
    service = provideDoService()
  })

  test('one', async () => testOption('one'))
  test('two', async () => testOption('two'))
  test('--help/--version', async () => {
    const exit = mockProcessExit()
    const write = mockStdoutWrite()

    // commander does not behave well when we mock process.exit
    mockConsoleError()
    await runProgram(initializer(), 'test', '--help')
    await runProgram(initializer(), 'test', '--version')
    expect(exit).toHaveBeenCalled()
    expect(calledWithIncludes(write, NAME))
    expect(calledWithIncludes(write, VERSION))
  })
})

async function testOption (option: string) {
  await runProgram(initializer(), 'test', arg, `--${option}`)
  expect(service.do).toHaveBeenCalledWith(`${arg} ${option}`)
}
