import { Runnable } from '@app/lib/interfaces/runnable.interface'
import { MultipleExclusiveOptionsController } from './multiplie-exclusive-options.controller'
import { iocContextInitializer } from '@e2e/fixtures/common/ioc-context-initializer'
import { Constructor } from 'awilix'

export function initializer (entryPoint?: Constructor<Runnable>) {
  return iocContextInitializer({
    entryPoint,
    providers: [MultipleExclusiveOptionsController]
  })
}
