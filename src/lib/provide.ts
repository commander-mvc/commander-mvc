import { addInjectable } from './injection-table'
import { registerInjectable } from './register-injectable'
import { Constructor } from 'awilix'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'

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
  addInjectable(name, injectableInfo)
  return name
}
