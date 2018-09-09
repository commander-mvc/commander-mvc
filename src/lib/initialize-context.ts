import { entryPointInfo } from './entry-point-info';
import { provideAll } from './provide'
import { resolveEntryPoint } from './resolve-entry-point'
import { CliService } from './services/cli.service'
import { registerInjectable } from './register-injectable'
import { ContextInitialization } from './interfaces/context-initialization.interface';

export function initializeContext ({ entryPoint, providers }: ContextInitialization) {
  registerInjectable(CliService)
  provideAll(providers)
  entryPointInfo.constructor = entryPoint
  return { run: (args) => resolveEntryPoint().run(args) }
}
