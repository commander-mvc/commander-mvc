import { makeArgv } from '@e2e/helpers/make-argv'

export async function runProgram (
  initializeIocContext: () => { run: (args: string[]) => void },
  ...args
) {
  const { run } = initializeIocContext()
  return run(makeArgv(args))
}
