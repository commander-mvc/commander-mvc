export interface ExceptionFilter<T> {
  catch (exception: T)
}
