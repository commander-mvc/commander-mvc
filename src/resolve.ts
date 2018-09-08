import { container } from './container'
import { constructorToToken } from './constructor-to-token'
import { contains as controllerTableContains, get as getControllerOptions } from './controller-table'

export function resolve (token) {
  if (token.prototype != null) {
    token = constructorToToken(token)
  }
  const resolved = container.resolve(token)
  registerCommandIfController(token, resolved)
  return resolved
}

function registerCommandIfController (token, instance) {
  if (controllerTableContains(token)) {
    const { registerCommand, prefix } = getControllerOptions(token)
    registerCommand(prefix, container.cradle.cliService, instance)
  }
}
