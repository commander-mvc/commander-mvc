import { ExceptionFilter } from '@app/index'
import { Catch } from '@app/lib/decorators'

@Catch()
export class AnyExceptionFilter implements ExceptionFilter<any> {
  catch (exception: any) {
    // Empty
  }
}
