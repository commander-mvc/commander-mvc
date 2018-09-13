import { iocContextInitializer } from '@e2e/fixtures/common/ioc-context-initializer'
import { WithoutOptionsController } from './without-options.controller'

export function initializer () {
  return iocContextInitializer({
    providers: [
      WithoutOptionsController
    ]
  })
}
