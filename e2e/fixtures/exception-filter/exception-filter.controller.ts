import { OtherException } from './other-exception'
import { MyException } from './my-exception'
import { HasArg } from '@app/lib/interfaces/has-arg.interface'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test',
  options: [
    ['-e, --exception <message>', 'specify exception message'],
    ['-u, --unknown-exception', 'throw an unknown exception']
  ]
})
export class ExceptionFilterController {
  @Action({
    forOptions: options => !!options.exception
  })
  myException ({ exception }) {
    throw new MyException(exception)
  }

  @Action({
    forOptions: options => !!options.unknownException
  })
  unknownException () {
    throw new Error()
  }

  @Action()
  otherException () {
    throw new OtherException()
  }
}
