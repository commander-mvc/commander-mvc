export function mockConsoleError () {
  return jest.spyOn(console, 'error').mockImplementation(msg => msg)
}
