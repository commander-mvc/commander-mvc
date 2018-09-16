/**
 * Runnable interface. Intended to be used on a custom
 * entrypoint.
 */
export interface Runnable {

  /**
   * Run the program.
   * @param argv Arguments to run the program with.
   */
  run (argv: string[]): void
}
