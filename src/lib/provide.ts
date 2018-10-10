import { asClass, asValue, asFunction, Constructor } from 'awilix'
import { addInjectable } from './tables/injection-table'
import { registerInjectable } from './register-injectable'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'
import { container } from './container'
import { registrationKeys } from './registration-keys'

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
}

/**
 * Manually provide an injectable.
 * @param name the name that will be used to resolve the injectable.
 * @param injectableInfo `Injectable` information that specifies
 * how the DI framework should create an instance and the lifetime
 * of that instance.
 * @returns the `name`.
 */
export function provide<T extends Constructor<T>> (
  name: string,
  injectableInfo: InjectableTableEntry<T>
) {
  return {
    [registrationKeys.injectable]: provideRaw(name, injectableInfo)
  }
}

export function provideRaw<T extends Constructor<T>> (
  name: string,
  injectableInfo: InjectableTableEntry<T>
) {
  return () => {
    const resolver = getResolver(injectableInfo)
    container.register({
      [name]: resolver
    })
  }
}

function getResolver (options: InjectableTableEntry<any>) {
  const provider = options.provider
  if (provider.useConstructor) {
    return asClass(provider.useConstructor, options)
  } else if (provider.useValue) {
    return asValue(provider.useValue)
  } else if (provider.useFactory) {
    return asFunction(provider.useFactory)
  } else {
    throw new Error('useConstructor, useValue, or useFactory must be specified')
  }
}
