import { Constructor } from 'awilix'
import { Runnable } from './runnable.interface'
import { InjectionRegistrationKey } from './injection-registration-key'

export interface ContextInitialization {
  entryPoint?: Constructor<Runnable>
  providers: InjectionRegistrationKey[]
}
