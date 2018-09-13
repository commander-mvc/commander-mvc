import { Controller, Action } from 'commander-mvc'
import { MessageView } from './message.view'

@Controller({
  command: 'hello [name]',
  options: []
})
export class HelloController {
  constructor({ helloService }) {
    this.helloService = helloService
  }

  @Action({
    forOptions: () => true,
    view: MessageView
  })
  sayHello() {
    return this.helloService.sayHello(this.arg)
  }
}