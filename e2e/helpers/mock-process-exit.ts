export function mockProcessExit () {
  return jest.spyOn(process, 'exit').mockImplementation(n => n)
}
