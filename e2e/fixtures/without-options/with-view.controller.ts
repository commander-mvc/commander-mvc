import { View } from '@app/lib/interfaces'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test-with-view'
})
export class WithViewController {
  private service

  constructor ({ service }) {
    this.service = service
  }

  @Action({
    view: class Bam implements View { print () { /**/ } }
  })
  actionWithView () {
    this.service.do('')
  }
}
