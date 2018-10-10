import { InjectionRegistrationKey } from './interfaces/injection-registration-key'
import { container } from './container'
import { constructorToToken } from './constructor-to-token'

export function resolve (key: string): any {
  return container.resolve(key)
}
