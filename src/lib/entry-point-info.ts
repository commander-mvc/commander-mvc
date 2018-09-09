import { EntryPointInfo } from './interfaces/entry-point-info.interface'
import { CommanderStatic } from 'commander'
import { Runnable } from './interfaces/runnable.interface'

class DefaultEntryPoint implements Runnable {
  private _cli: CommanderStatic

  constructor ({ cliService }) {
    this._cli = cliService
  }

  async run (argv: string[]) {
    return this._cli.parse(argv)
  }
}

export const entryPointInfo: EntryPointInfo = {
  constructor: DefaultEntryPoint,
  name: '',
  version: ''
}
