import chalk from 'chalk'

export async function wrapAsync (fn) {
  try {
    await fn()
  } catch (error) {
    let detail
    if (error.message) {
      detail = error.message
    } else {
      detail = error.error.detail
    }
    console.log(chalk.bold.red(`Error: ${detail}`))
  }
}
