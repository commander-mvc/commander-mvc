import { container } from './container'
import { asClass, asValue, asFunction } from 'awilix'
import { get } from './injection-table'
import { contains as controllerTableContains } from './controller-table'
import { constructorToToken } from './constructor-to-token'

export const controllersToResolve = []

export function registerInjectable (injectable) {
  if (typeof injectable === 'string') {
    registerInjection(injectable, get(injectable))
  } else {
    const token = constructorToToken(injectable)
    registerInjection(token, get(token))
  }
}

function registerInjection (token, injection) {
  container.register({
    [token]: getProvider(injection)
  })
  resolveIfController(token)
}

function resolveIfController (token) {
  if (controllerTableContains(token)) {
    controllersToResolve.push(token)
  }
}

function getProvider (options) {
  const provider = options.provider
  if (provider.useConstructor) {
    return asClass(provider.useConstructor, options)
  } else if (provider.useValue) {
    return asValue(provider.useValue)
  } else if (provider.useFactory) {
    return asFunction(provider.useFactory)
  }
}
