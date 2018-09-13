import { Injectable } from 'commander-mvc'

@Injectable()
export class HelloService {
  sayHello(name) {
    if (name) {
      return `Hello, ${name}!`
    }
    return 'Hello, world!'
  }
}
