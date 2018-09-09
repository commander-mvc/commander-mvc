import cli from 'commander'
import * as provide from '../provide'
import { entryPointInfo } from '../entry-point-info'

console.log('initializing name and version')

cli
  .name(entryPointInfo.name)
  .version(entryPointInfo.version)

export const CliService = provide.provide('cliService', {
  provider: {
    useValue: cli
  }
})
