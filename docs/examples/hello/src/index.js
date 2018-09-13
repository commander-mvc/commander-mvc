#!/usr/bin/env node

import { initializeContext, EntryPoint } from 'commander-mvc'
import { HelloController } from './hello.controller'
import { HelloService } from './hello.service'
import pjson from '../package.json'

@EntryPoint({
  name: 'commander-mvc-hello',
  version: pjson.version
})
class Program {
  constructor({ cliService }) {
    this.cli = cliService
  }

  run(args) {
    this.cli.parse(args)
  }
}

const { run } = initializeContext({
  entryPoint: Program,
  providers: [
    HelloController,
    HelloService
  ]
})

run(process.argv)
