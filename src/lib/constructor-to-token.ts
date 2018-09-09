import { camelCase } from 'lodash'
import { Constructor } from 'awilix'

export function constructorToToken (constructor: Constructor<any>) {
  const name = constructor.name
  return camelCase(name)
}
