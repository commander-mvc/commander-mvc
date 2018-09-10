import { OtherException } from './other-exception'
import { MyException } from './my-exception'
import { HasArg } from '@app/lib/interfaces/has-arg.interface'
import { Controller, Action } from '@app/lib/decorators'

@Controller({
  command: 'test',
  options: [
    ['-e, --exception <message>', 'specify exception message']
  ]
})
export class ExceptionFilterController {
  @Action({
    forOptions: options => !!options.exception
  })
  actionOne ({ exception }) {
    throw new MyException(exception)
  }

  @Action({
    forOptions: options => true
  })
  actionTwo () {
    throw new OtherException()
  }
}
