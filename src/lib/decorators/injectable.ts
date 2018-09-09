import { Lifetime } from '../..'
import { constructorToToken } from '../constructor-to-token'
import { provide } from '../provide'
import { InjectableTableEntry } from '../interfaces/injectable-table.interface'
import { Constructor } from 'awilix'

export function Injectable<T extends Constructor<T>> ({ lifetime, provider }: InjectableTableEntry<T> = <InjectableTableEntry<T>>{}) {
  return (constructor: Constructor<T>) => {
    lifetime = lifetime || Lifetime.TRANSIENT
    const token = constructorToToken(constructor)
    provider = provider || { useConstructor: constructor }
    provide(token, {
      lifetime,
      provider
    })
  }
}
