import { Constructor } from 'awilix'
import { Runnable } from './runnable.interface'
import { InjectionRegistrationKey } from './injection-registration-key'

/**
 * Info used when initializing the context in which the
 * program will run.
 */
export interface ContextInitialization {
  /**
   * Specify a custom entrypoint.
   */
  entryPoint?: Constructor<Runnable>

  /**
   * List of providers, including all controllers. Providers
   * listed here will be available for dependency injection
   * throughout the rest of the program.
   */
  providers: InjectionRegistrationKey[]

  /**
   * The name of the program. Should not be specified if using
   * a custom entrypoint.
   */
  name?: string

  /**
   * The version of the program. Should not be specified if using
   * a custom entrypoint.
   */
  version?: string
}
