import { MetaInfo } from './entry-point-info.interface'
import { Constructor } from 'awilix'
import { Runnable } from './runnable.interface'
import { InjectionRegistrationKey } from './injection-registration-key'

export interface ContextInitialization extends Partial<MetaInfo> {
  entryPoint?: Constructor<Runnable>
  providers: InjectionRegistrationKey[]
}
