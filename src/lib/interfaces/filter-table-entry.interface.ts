import { ExceptionFilter } from './exception-filter.interface'
import { Constructor } from 'awilix'

export interface FilterTableEntry {
  Catches?: Constructor<Error>,
  Filter: Constructor<ExceptionFilter<any>>
}
