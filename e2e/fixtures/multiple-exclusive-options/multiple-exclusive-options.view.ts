import { View } from '@app/lib/interfaces/view.interface'

export class MultipleExclusiveOptionsView implements View {
  private _service: any

  constructor ({ service }) {
    this._service = service
  }

  print (model) {
    this._service.display(model)
  }
}
