/**
 * To be used as the view of an `Action`.
 */
export interface View {
  /**
   * Prints the given model.
   * @param model The model to print. When used as the view of an `Action`
   * this will be passed the return value of that action.
   */
  print (model: any): void
}
