import chalk from 'chalk'

export function printError (message: string) {
  console.error(chalk.bold.red(message))
}
