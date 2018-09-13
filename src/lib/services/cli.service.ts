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
        setNameAndVersion()
        return cli
      }
    }
  }
})

function setNameAndVersion () {
  if (entryPointInfo.name) {
    cli.name(entryPointInfo.name)
  }
  if (entryPointInfo.version) {
    cli.version(entryPointInfo.version)
  }
}
