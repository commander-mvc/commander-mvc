import { InjectionRegistrationKey } from './interfaces/injection-registration-key'
import { container } from './container'
import { constructorToToken } from './constructor-to-token'
import { contains as controllerTableContains, get as getControllerOptions } from './controller-table'

export function resolve (key: InjectionRegistrationKey) {
  if (typeof key === 'function') {
    key = constructorToToken(key)
  }
  const resolved = container.resolve(key)
  registerCommandIfController(key, resolved)
  return resolved
}

function registerCommandIfController (token: string, instance) {
  if (controllerTableContains(token)) {
    const { registerCommand } = getControllerOptions(token)
    registerCommand(container.cradle.cliService, instance)
  }
}
