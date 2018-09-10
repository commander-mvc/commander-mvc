import { ContextInitialization } from './../../../src/lib/interfaces/context-initialization.interface'
import { SERVICE_TOKEN } from './service-token'
import { initializeContext } from '@app/lib/initialize-context'

export function iocContextInitializer ({
  entryPoint,
  providers
}: ContextInitialization) {
  return () => initializeContext({
    entryPoint,
    providers: [
      SERVICE_TOKEN,
      ...providers
    ]
  })
}
