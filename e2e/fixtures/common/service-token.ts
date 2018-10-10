import { InjectionRegistrationKey } from '@app/lib/interfaces/injection-registration-key'

export const SERVICE_TOKEN = 'service'

let provider: InjectionRegistrationKey

export function setServiceProvider (serviceProvider: InjectionRegistrationKey) {
  provider = serviceProvider
}

export function getServiceProvider (): InjectionRegistrationKey {
  return provider
}
