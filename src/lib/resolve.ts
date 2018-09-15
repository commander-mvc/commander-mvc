import { InjectionRegistrationKey } from './interfaces/injection-registration-key'
import { container } from './container'
import { constructorToToken } from './constructor-to-token'
import { contains as controllerTableContains, get as getControllerOptions } from './controller-table'

export function resolve (key: InjectionRegistrationKey): any {
  if (typeof key === 'function') {
    key = constructorToToken(key)
  }
  const resolved = container.resolve(key)
  return resolved
}
