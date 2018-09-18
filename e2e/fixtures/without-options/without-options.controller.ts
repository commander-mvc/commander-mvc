import { HasArg } from '@app/lib/interfaces'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test <arg>'
})
export class WithoutOptionsController implements HasArg {
  private _service
  arg: string

  constructor ({ service }) {
    this._service = service
  }

  @Action()
  actionOne () {
    this._service.do(this.arg)
  }
}
