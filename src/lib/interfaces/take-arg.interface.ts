/**
 * Intended to be used on a controller. Use this
 * interface when you need the `takeArg` method.
 */
export interface TakeArg {

  /**
   * Called when a command is given and it takes an argument.
   * @param arg The argument given to the command.
   */
  takeArg (arg: any): void
}
