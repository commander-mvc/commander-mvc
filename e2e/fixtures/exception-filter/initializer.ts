import { AnyExceptionFilter } from '@e2e/fixtures/exception-filter/any-exception.filter'
import { ExceptionFilterController } from './exception-filter.controller'
import { OtherExceptionFilter } from './other-exception.filter'
import { initializeContext } from '@app/index'
import { MyExceptionFilter } from './my-exception.filter'

export function initializer () {
  return () => initializeContext({
    providers: [
      ExceptionFilterController,
      MyExceptionFilter,
      OtherExceptionFilter,
      AnyExceptionFilter
    ]
  })
}
