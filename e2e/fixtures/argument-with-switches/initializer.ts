import { ArgumentWithSwitchesController } from '@e2e/fixtures/argument-with-switches/argument-with-switches.controller'
import { iocContextInitializer } from '@e2e/fixtures/common/ioc-context-initializer'

export function initializer () {
  return iocContextInitializer({
    providers: [
      ArgumentWithSwitchesController
    ]
  })
}
