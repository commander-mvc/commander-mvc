import { iocContextInitializer } from '@e2e/fixtures/common/ioc-context-initializer'
import { WithoutOptionsController } from './without-options.controller'
import { WithViewController } from '@e2e/fixtures/without-options/with-view.controller'

export function initializer ({ name, version }: { name?: string, version?: string } = {}) {
  return iocContextInitializer({
    name,
    version,
    providers: [
      WithoutOptionsController,
      WithViewController
    ]
  })
}
