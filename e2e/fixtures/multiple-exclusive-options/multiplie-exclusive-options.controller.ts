import { MultipleExclusiveOptionsView } from '@e2e/fixtures/multiple-exclusive-options/multiple-exclusive-options.view'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test',
  options: [
    ['-o, --one <arg>', 'option 1'],
    ['-t, --two <arg>', 'option 2']
  ]
})
export class MultipleExclusiveOptionsController {
  private _service

  constructor ({ service }) {
    this._service = service
  }

  @Action({
    forOptions: options => !!options.one,
    view: MultipleExclusiveOptionsView
  })
  actionOne ({ one }) {
    return this._service.calculate(one)
  }

  @Action({
    forOptions: options => !!options.two,
    view: MultipleExclusiveOptionsView
  })
  actionTwo ({ two }) {
    return this._service.calculate(two)
  }
}
