import { camelCase } from 'lodash'

export function constructorToToken (constructor) {
  const name = constructor.name
  return camelCase(name)
}
