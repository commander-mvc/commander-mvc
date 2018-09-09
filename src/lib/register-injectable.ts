import { container } from './container'
import { asClass, asValue, asFunction } from 'awilix'
import { get } from './injection-table'
import { contains as controllerTableContains } from './controller-table'
import { constructorToToken } from './constructor-to-token'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'
import { InjectionRegistrationKey } from './interfaces/injection-registration-key'

export const controllersToResolve: string[] = []

export function registerInjectable (injectable: InjectionRegistrationKey) {
  if (typeof injectable === 'string') {
    registerInjection(injectable, get(injectable))
  } else {
    const token = constructorToToken(injectable)
    registerInjection(token, get(token))
  }
}

function registerInjection (token: string, injection: InjectableTableEntry<any>) {
  container.register({
    [token]: getResolver(injection)
  })
  resolveIfController(token)
}

function resolveIfController (token: string) {
  if (controllerTableContains(token)) {
    controllersToResolve.push(token)
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
