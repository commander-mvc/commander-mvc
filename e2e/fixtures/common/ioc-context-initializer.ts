import { ContextInitialization } from './../../../src/lib/interfaces/context-initialization.interface'
import { SERVICE_TOKEN, getServiceProvider } from './service-token'
import { initializeContext } from '@app/lib/initialize-context'
import { Runnable } from '@app/lib/interfaces/runnable.interface'

export function iocContextInitializer ({
  entryPoint,
  providers,
  name,
  version
}: ContextInitialization): Runnable {
  return () => initializeContext({
    entryPoint,
    name,
    version,
    providers: [
      getServiceProvider(),
      ...providers
    ]
  })
}
