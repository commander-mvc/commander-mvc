import { provideAll } from './provide'
import { entryPointInfo } from './entry-point-info'
import { resolveEntryPoint } from './resolve-entry-point'

export function initializeContext ({ entryPoint, providers }) {
  provideAll(providers)
  entryPointInfo.constructor = entryPoint
  return { run: (args) => resolveEntryPoint().run(args) }
}
