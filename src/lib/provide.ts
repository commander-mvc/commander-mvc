import { add } from './injection-table'
import { registerInjectable } from './register-injectable'
import { Constructor } from 'awilix'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
}

export function provide<T extends Constructor<T>> (
  name: string,
  injectable: InjectableTableEntry<T>
) {
  add(name, injectable)
  return name
}
