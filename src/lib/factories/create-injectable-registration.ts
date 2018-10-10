import { Lifetime } from '../..'
import { constructorToToken } from '../constructor-to-token'
import { provideRaw } from '../provide'
import { InjectableTableEntry } from '../interfaces/injectable-table.interface'
import { Constructor } from 'awilix'
import { registrationKeys } from '../registration-keys'

export function createInjectableRegistration<T extends Constructor<T>> (
  constructor: T,
  injectableInfo: InjectableTableEntry<T> = {} as InjectableTableEntry<T>
) {
  let { lifetime, provider } = injectableInfo
  lifetime = lifetime || Lifetime.TRANSIENT
  const token = constructorToToken(constructor)
  provider = provider || { useConstructor: constructor }
  constructor[registrationKeys.injectable] = provideRaw(token, {
    lifetime,
    provider
  })
}
