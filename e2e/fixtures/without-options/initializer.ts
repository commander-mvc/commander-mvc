import { iocContextInitializer } from '@e2e/fixtures/common/ioc-context-initializer'
import { WithoutOptionsController } from './without-options.controller'

export function initializer ({ name, version }: { name?: string, version?: string } = {}) {
  return iocContextInitializer({
    name,
    version,
    providers: [
      WithoutOptionsController
    ]
  })
}
