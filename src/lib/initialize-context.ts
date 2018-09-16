import { Runnable } from './interfaces/runnable.interface'
import { MetaInfo } from './interfaces/entry-point-info.interface'
import { entryPointInfo } from './entry-point-info'
import { provideAll } from './provide'
import { resolveEntryPoint } from './resolve-entry-point'
import { resolve } from './resolve'
import { CliService } from './services/cli.service'
import { registerInjectable } from './register-injectable'
import { ContextInitialization } from './interfaces/context-initialization.interface'

/**
 * Initializes the context used to create the application in.
 * This includes a custom entrypoint, list of providers, and if a custom
 * entryPoint is not provided the name and version of the program.
 * @param contextInfo Info used to initialize the context with.
 * @returns The `EntryPoint` with which to run the program.
 */
export function initializeContext (contextInfo: ContextInitialization): Runnable {
  const { entryPoint, providers, name, version } = contextInfo
  registerInjectable(CliService)
  provideAll(providers)
  if (entryPoint) {
    entryPointInfo.constructor = entryPoint
  }
  overrideNameAndVersion({ name, version })
  return {
    run: (args: any[]) => (resolveEntryPoint().run(args))
  }
}

function overrideNameAndVersion ({ name, version }: Partial<MetaInfo>) {
  const cliService = resolve('cliService')
  if (name) {
    entryPointInfo.name = name
    cliService.name(entryPointInfo.name)
  }
  if (version) {
    entryPointInfo.version = version
    cliService.version(entryPointInfo.version)
  }
}
