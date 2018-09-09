import { MultipleExclusiveOptionsController } from './multiplie-exclusive-options.controller'
import { initializeContext } from '@app/lib/initialize-context'

export function initializeIocContext () {
  return initializeContext({
    providers: [
      'service',
      MultipleExclusiveOptionsController
    ]
  })
}
