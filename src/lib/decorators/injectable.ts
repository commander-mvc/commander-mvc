import { Lifetime } from '../..'
import { constructorToToken } from '../constructor-to-token'
import { provide } from '../provide'
import { InjectableTableEntry } from '../interfaces/injectable-table.interface'
import { Constructor } from 'awilix'

/**
 * Creates an `Injectable` decorator.
 * @param injectableInfo `Injectable` information that specifies
 * how the DI framework should create an instance and the lifetime
 * of that instance.
 * @returns The decorator used to designate a class an injectable
 * resolution. The decorator will automatically create a ``useClass``
 * provider. The provider will use the class' name in camelCase for
 * resolving.
 */
export function Injectable<T extends Constructor<T>> (
  injectableInfo: InjectableTableEntry<T> = {} as InjectableTableEntry<T>
) {
  let { lifetime, provider } = injectableInfo
  return (constructor: T) => {
    lifetime = lifetime || Lifetime.TRANSIENT
    const token = constructorToToken(constructor)
    provider = provider || { useConstructor: constructor }
    provide(token, {
      lifetime,
      provider
    })
  }
}
