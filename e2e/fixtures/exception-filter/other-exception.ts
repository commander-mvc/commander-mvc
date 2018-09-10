import { Exception } from '@app/lib/interfaces'

export class OtherException implements Exception {
  name = 'OtherException'
  message = this.name
}
