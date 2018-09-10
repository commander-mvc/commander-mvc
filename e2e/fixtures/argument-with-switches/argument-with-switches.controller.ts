import { HasArg } from '@app/lib/interfaces/has-arg.interface'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test <arg>',
  options: [
    ['-o, --one', 'switch 1'],
    ['-t, --two', 'switch 2']
  ]
})
export class ArgumentWithSwitchesController implements HasArg {
  private _service
  arg: string

  constructor ({ service }) {
    this._service = service
  }

  @Action({
    forOptions: options => !!options.one
  })
  actionOne () {
    this.doArg('one')
  }

  @Action({
    forOptions: options => !!options.two
  })
  actionTwo () {
    this.doArg('two')
  }

  private doArg (option: string) {
    this._service.do(`${this.arg} ${option}`)
  }
}
