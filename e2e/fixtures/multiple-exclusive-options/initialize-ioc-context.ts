import { Runnable } from '@app/lib/interfaces/runnable.interface'
import { Constructor } from 'awilix'
import { MultipleExclusiveOptionsController } from './multiplie-exclusive-options.controller'
import { initializeContext } from '@app/lib/initialize-context'

export function initializeIocContext (entryPoint?: Constructor<Runnable>) {
  return () => initializeContext({
    entryPoint,
    providers: [
      'service',
      MultipleExclusiveOptionsController
    ]
  })
}
