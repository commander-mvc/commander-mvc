import { EntryPointInfo } from './interfaces/entry-point-info.interface'
import { CommanderStatic } from '../../node_modules/commander'
import { EntryPoint } from './interfaces/entry-point.interface'

class DefaultEntryPoint implements EntryPoint {
  private _cli: CommanderStatic

  constructor ({ cliService }) {
    this._cli = cliService
  }

  run (argv: string[]) {
    this._cli.parse(argv)
  }
}

export const entryPointInfo: EntryPointInfo = {
  constructor: DefaultEntryPoint,
  name: '',
  version: ''
}
