import { CommanderStatic } from 'commander'
import { Runnable } from '@app/lib/interfaces/runnable.interface'
import { EntryPoint } from '@app/lib/decorators'

@EntryPoint({
  name: 'cli',
  version: 'test-version'
})
export class CustomEntryPoint implements Runnable {
  _cli: CommanderStatic

  constructor ({ cliService }) {
    this._cli = cliService
  }

  async run (argv: string[]) {
    await this._cli.parse(argv)
  }
}
