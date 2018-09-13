export function mockStdoutWrite () {
  return jest.spyOn(process.stdout, 'write').mockImplementation(msg => msg)
}
