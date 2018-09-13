import { provideDoService } from '@e2e/fixtures/common/provide-do-service'
import { runProgram } from '@e2e/helpers/run-program'
import { initializer } from '@e2e/fixtures/without-options/initializer'
import { mockStdoutWrite } from '@e2e/helpers/mock-stdout-write'
import { mockProcessExit } from '@e2e/helpers/mock-process-exit'
import { mockConsoleError } from '@e2e/helpers/mock-console-error'
import { calledWithIncludes } from '@e2e/helpers/called-with-includes'

const arg = 'the-arg'

const exit = mockProcessExit()
const write = mockStdoutWrite()

// commander does not behave well when we mock process.exit
mockConsoleError()

const programInfo = {
  name: 'test-program',
  version: 'test-version'
}

describe('controller without options', () => {
  let service

  beforeEach(() => {
    service = provideDoService()
  })

  test('works', async () => {
    await runProgram(initializer(), 'test', arg)
    expect(service.do).toHaveBeenCalledWith(arg)
  })

  test('--help/--version', async () => {
    await runProgram(initializer(programInfo), '--help')
    await runProgram(initializer(programInfo), '--version')
    expect(exit).toHaveBeenCalled()
    expect(calledWithIncludes(write, programInfo.name)).toBeTruthy()
    expect(calledWithIncludes(write, programInfo.version)).toBeTruthy()
  })
})
