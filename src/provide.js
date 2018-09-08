import { add } from './injection-table'
import { resolveAll } from './resolve-all'
import { registerInjectable, controllersToResolve } from './register-injectable'
import { CliService } from './services/cli.service'

export function provideAll (injectables) {
  registerInjectable(CliService)
  injectables.forEach(injectable => {
    registerInjectable(injectable)
  })
  resolveAll(controllersToResolve)
}

export function provide (name, { lifetime, provider }) {
  add(name, { lifetime, provider })
  return name
}
