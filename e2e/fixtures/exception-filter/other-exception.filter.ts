import { ExceptionFilter } from '@app/index'
import { Catch } from '@app/lib/decorators'
import { OtherException } from './other-exception'

@Catch(OtherException)
export class OtherExceptionFilter implements ExceptionFilter<OtherException> {
  catch (exception: OtherException) {
    // Empty
  }
}
