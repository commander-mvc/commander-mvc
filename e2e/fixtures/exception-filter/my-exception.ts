import { Exception } from '@app/lib/interfaces'
export class MyException implements Exception {
  name = 'MyException'
  message: string

  constructor (message) {
    this.message = message
  }
}
