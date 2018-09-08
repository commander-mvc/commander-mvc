import cli from 'commander'
import * as provide from '../provide'
import { entryPointInfo } from '../entry-point-info'

console.log(JSON.stringify(cli, null, 2))
console.log(JSON.stringify(provide, null, 2))
console.log(JSON.stringify(provide.provide, null, 2))
console.log(JSON.stringify(provide.provideAll, null, 2))
console.log(JSON.stringify(entryPointInfo, null, 2))

cli
  .name(entryPointInfo.name)
  .version(entryPointInfo.version)

export const CliService = provide.provide('cliService', {
  provider: {
    useValue: cli
  }
})
