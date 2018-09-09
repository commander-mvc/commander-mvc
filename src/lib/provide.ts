import { add } from './injection-table'
import { resolveAll } from './resolve-all'
import { registerInjectable, controllersToResolve } from './register-injectable'
import { Constructor } from 'awilix'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
  resolveAll(controllersToResolve)
}

export function provide<T extends Constructor<T>> (
  name: string,
  injectable: InjectableTableEntry<T>
) {
  add(name, injectable)
  return name
}
