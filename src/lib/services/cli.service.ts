import cli from 'commander'
import * as provide from '../provide'
import { entryPointInfo } from '../entry-point-info'

let a = cli

export const CliService = provide.provide('cliService', {
  provider: {
    useFactory: () => 
      cli
        .name(entryPointInfo.name)
        .version(entryPointInfo.version)
  }
})
