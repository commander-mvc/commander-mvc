import cli from 'commander'
import { provide } from '../provide'
import { entryPointInfo } from '../entry-point-info'

cli
  .name(entryPointInfo.name)
  .version(entryPointInfo.version)

export const CliService = provide('cliService', {
  provider: {
    useValue: cli
  }
})
