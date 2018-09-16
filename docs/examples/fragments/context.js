@EntryPoint({ 
  name: 'context-example',
  version: '1.0.0'
})
export class Program {
  constructor ({ cliService }) {
    this.cliService = cliService
  }

  run(argv) {
    this.cliService.parse(argv)
  }
}

const customProvider = provide('customProvider', { /* ... */ })

initializeContext({
  entryPoint: Program,
  providers: [
    AccountService,
    AccountController,
    ConfigService,
    customProvider
  ]
})
