#!/usr/bin/env node

import { initializeContext } from 'commander-mvc'
import { HelloController } from './hello.controller'
import { HelloService } from './hello.service'

const { run } = initializeContext({
  providers: [
    HelloController,
    HelloService
  ]
})

run(process.argv)
