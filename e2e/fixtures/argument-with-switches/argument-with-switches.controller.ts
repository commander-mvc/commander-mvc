import { HasArg } from '@app/lib/interfaces/has-arg.interface'
import { Controller, Action } from '@app/lib/decorators'
import { TakeArg } from '@app/lib/interfaces'

@Controller({
  command: 'test <arg>',
  options: [
    ['-o, --one', 'switch 1'],
    ['-t, --two', 'switch 2']
  ]
})
export class ArgumentWithSwitchesController implements HasArg, TakeArg {
  private _service
  arg: string
  myArg: string

  constructor ({ service }) {
    this._service = service
  }

  takeArg (myArg: string) {
    this.myArg = 'takeArg: ' + myArg
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
    this._service.do(`${this.myArg} ${option}`)
  }
}
