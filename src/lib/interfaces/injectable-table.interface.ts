import { LifetimeType, Lifetime } from 'awilix/lib/lifetime'
import { Constructor, FunctionReturning } from 'awilix'

export interface InjectableTable {
  [token: string]: InjectableTableEntry<any>
}

/**
 * Meta information for an `Injectable`.
 * @see Injectable
 * @param T The type being being provided.
 */
export interface InjectableTableEntry<T> {

  /**
   * Either ``SINGLETON`` or ``TRANSIENT``. In the former, only
   * one instance will be resolved and cached for future resolves.
   * In the latter, a new instance will be created each time it is
   * resolved. Note this only affects a ``useConstructor`` provider.
   * @see Provider
   */
  lifetime?: LifetimeType

  /**
   * Describes how the DI framework should create an instance during
   * resolution.
   * @see Provider<T>
   */
  provider: Provider<T>
}

/**
 * Describes how the DI framework should create an instance during
 * resolution. Only one of the options should be used. The behavior
 * is not well-defined if more than one is used and can change in
 * a future release.
 * @param T The type being provided
 */
export interface Provider<T> {

  /**
   * The value given will be resolved as is.
   */
  useValue?: any

  /**
   * The class given will be created and resolved using ``new``.
   */
  useConstructor?: Constructor<T>

  /**
   * The factory function given will be called, and the return value
   * will be resolved. Dependencies can be injected into the function's
   * parameters just like constructor injection.
   */
  useFactory?: AnyFunction
}

export type AnyFunction = (args: any[]) => any
