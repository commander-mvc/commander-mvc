import { MetaInfo } from './interfaces/entry-point-info.interface'
import { entryPointInfo } from './entry-point-info'
import { provideAll } from './provide'
import { resolveEntryPoint } from './resolve-entry-point'
import { resolve } from './resolve'
import { CliService } from './services/cli.service'
import { registerInjectable } from './register-injectable'
import { ContextInitialization } from './interfaces/context-initialization.interface'
import { CommanderStatic } from 'commander'

export function initializeContext ({ entryPoint, providers, name, version }: ContextInitialization) {
  registerInjectable(CliService)
  provideAll(providers)
  if (entryPoint) {
    entryPointInfo.constructor = entryPoint
  }
  overrideNameAndVersion({ name, version })
  return { run: (args) => resolveEntryPoint().run(args) }
}

function overrideNameAndVersion ({ name, version }: Partial<MetaInfo>) {
  const cliService = resolve<CommanderStatic>('cliService')
  if (name) {
    entryPointInfo.name = name
    cliService.name(entryPointInfo.name)
  }
  if (version) {
    entryPointInfo.version = version
    cliService.version(entryPointInfo.version)
  }
}
