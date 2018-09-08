import { container } from './container'
import { entryPointInfo } from './entry-point-info'

export function resolveEntryPoint () {
  const EntryPoint = entryPointInfo.constructor
  return new EntryPoint(container.cradle)
}
