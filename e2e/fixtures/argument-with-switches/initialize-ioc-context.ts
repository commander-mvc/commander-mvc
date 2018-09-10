import { Runnable } from '@app/lib/interfaces/runnable.interface'
import { Constructor } from 'awilix'
import { ArgumentWithSwitchesController } from './argument-with-switches.controller'
import { initializeContext } from '@app/lib/initialize-context'

export function initializeIocContext (entryPoint?: Constructor<Runnable>) {
  return () => initializeContext({
    entryPoint,
    providers: [
      'service',
      ArgumentWithSwitchesController
    ]
  })
}
