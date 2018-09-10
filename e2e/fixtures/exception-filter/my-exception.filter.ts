import { MyException } from './my-exception'
import { ExceptionFilter } from '@app/lib/interfaces'
import { Catch } from '@app/lib/decorators'

@Catch(MyException)
export class MyExceptionFilter implements ExceptionFilter<MyException> {
  catch (exception: MyException) {
    // Empty
  }
}
