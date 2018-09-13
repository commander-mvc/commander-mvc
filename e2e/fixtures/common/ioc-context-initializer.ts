import { ContextInitialization } from './../../../src/lib/interfaces/context-initialization.interface'
import { SERVICE_TOKEN } from './service-token'
import { initializeContext } from '@app/lib/initialize-context'

export function iocContextInitializer ({
  entryPoint,
  providers,
  name,
  version
}: ContextInitialization) {
  return () => initializeContext({
    entryPoint,
    name,
    version,
    providers: [
      SERVICE_TOKEN,
      ...providers
    ]
  })
}
