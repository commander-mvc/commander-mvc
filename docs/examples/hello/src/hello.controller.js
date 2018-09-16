import { Controller, Action } from 'commander-mvc'
import { MessageView } from './message.view'

@Controller({
  command: 'hello [name]'
})
export class HelloController {
  constructor({ helloService }) {
    this.helloService = helloService
  }

  @Action({
    view: MessageView
  })
  sayHello() {
    return this.helloService.sayHello(this.arg)
  }
}
