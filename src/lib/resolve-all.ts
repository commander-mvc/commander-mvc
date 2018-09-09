import { InjectionRegistrationKey } from './interfaces/injection-registration-key';
import { resolve } from './resolve'

export function resolveAll (keys: InjectionRegistrationKey[]) {
  return keys.map(token => resolve(token))
}
