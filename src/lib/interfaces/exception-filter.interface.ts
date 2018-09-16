/**
 * An exception filter for errors of a particular type. Use
 * this interface to remember to implement the `catch` method.
 * @param T The type of error to catch.
 */
export interface ExceptionFilter<T> {

  /**
   * Called when catching an exception of the correct type.
   * @param exception The exception that was caught.
   */
  catch (exception: T): void
}
