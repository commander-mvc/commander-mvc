export class View {
  constructor ({ printerService }) {
    this.printer = printerService
  }

  print (accounts) {
    accounts.forEach(account => {
      this.printerService.printHeader(account.name)
      this.printerService.printYellow(account.balance)
      this.printerService.printGreen(account.clearedBalance)
      this.printerService.printRed(account.unclearedBalance)
    })
  }
}
