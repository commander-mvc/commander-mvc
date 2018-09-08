import { provideAll } from './provide'
import { entryPointInfo } from './entry-point-info'
import { resolveEntryPoint } from './resolve-entry-point'
import { CliService } from './services/cli.service'
import { registerInjectable } from './register-injectable';

export function initializeContext ({ entryPoint, providers }) {
  registerInjectable(CliService)
  provideAll(providers)
  entryPointInfo.constructor = entryPoint
  return { run: (args) => resolveEntryPoint().run(args) }
}
