import cli from 'commander'
import { provide } from '../provide'
import { entryPointInfo } from '../entry-point-info'
import { Lifetime } from 'awilix'

let initialized = false

export const CliService = provide('cliService', {
  provider: {
    useFactory: () => {
      if (initialized) {
        return cli
      } else {
        initialized = true
        return cli
          .name(entryPointInfo.name)
          .version(entryPointInfo.version)
      }
    }
  }
})
