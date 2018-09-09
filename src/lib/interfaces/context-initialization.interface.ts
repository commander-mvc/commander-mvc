import { Constructor } from 'awilix'
import { EntryPoint } from './entry-point.interface'
import { InjectionRegistrationKey } from './injection-registration-key'

export interface ContextInitialization {
  entryPoint?: Constructor<EntryPoint>
  providers: InjectionRegistrationKey[]
}
