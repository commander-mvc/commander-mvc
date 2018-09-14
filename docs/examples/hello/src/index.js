#!/usr/bin/env node

import { initializeContext } from 'commander-mvc'
import { HelloController } from './hello.controller'
import { HelloService } from './hello.service'
import pjson from '../package.json'

const { run } = initializeContext({
  name: 'commander-mvc-hello',
  version: pjson.version,
  providers: [
    HelloController,
    HelloService
  ]
})

run(process.argv)
