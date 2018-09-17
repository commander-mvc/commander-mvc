import { Injectable } from '../decorators/injectable'
import { ExceptionFilter } from './../interfaces/exception-filter.interface'
import { Constructor } from 'awilix'
import { add } from '../filter-table'
import { constructorToToken } from '../constructor-to-token'

/**
 * Creates a `Catch` decorator.
 * @param Exception The exception type to catch. By omitting this parameter,
 * the decorated exception filter will be a catch-all filter.
 * @returns The decorator used to designate a class as an `Exception Filter`.
 */
export function Catch<TCtor extends Constructor<ExceptionFilter<any>>, TError extends Constructor<any>>
  (Exception: TError | undefined) {
  return (constructor: TCtor) => {
    const token = constructorToToken(constructor)
    add(token, { Catches: Exception, Filter: constructor })
    Injectable()(constructor)
  }
}
