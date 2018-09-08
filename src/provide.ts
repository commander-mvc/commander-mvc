import { add } from './injection-table'
import { resolveAll } from './resolve-all'
import { registerInjectable, controllersToResolve } from './register-injectable'

export function provideAll (injectables) {
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
  resolveAll(controllersToResolve)
}

export function provide (name, { lifetime, provider }: { lifetime?, provider }) {
  add(name, { lifetime, provider })
  return name
}
