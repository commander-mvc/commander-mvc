import { container } from './container'
import { getInjectable } from './tables/injection-table'
import { controllerExists, getController } from './tables/controller-table'
import { constructorToToken } from './constructor-to-token'
import { InjectableTableEntry } from './interfaces/injectable-table.interface'
import { InjectionRegistrationKey } from './interfaces/injection-registration-key'
import { registrationKeys } from '@app/lib/registration-keys'

export const controllersToResolve: string[] = []

export function registerInjectable (injectable: InjectionRegistrationKey) {
  const register = injectable[registrationKeys.injectable]
  register()
}
