import { HasArg } from '../interfaces/has-arg.interface'
import { add, get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from '../decorators/injectable'
import { first, last, each } from 'lodash'
import { wrapAsync } from '../wrap-async'
import { container } from '../container'
import { ControllerInfo } from '../interfaces/controller-table.interface'
import { Options } from '../interfaces/action-info.interface'
import { CommanderStatic } from 'commander'

/**
 * Creates a `Controller` decorator.
 * @param controller `Controller` information that specifies
 * the command and its options.
 *
 * @returns The decorator used to designate a class a controller.
 */
export function Controller (controller: ControllerInfo) {
  return (constructor) => {
    const token = constructorToToken(constructor)
    add(token, controller)
    const entry = get(token)
    const { actionsForOptions, actionViews } = entry
    entry.registerCommand = () => {
      const command: CommanderStatic = container.cradle.cliService
        .command(controller.command)
      each(controller.options, option => {
        (command as any)
          .option(...option)
      })
      command
        .action(async (...args) => {
          const options: Options = last(args)
          const controller = container.resolve<HasArg>(token)
          for (const { forOptions, methodName } of actionsForOptions) {
            if (forOptions(options)) {
              await wrapAsync(async () => {
                controller.arg = first(args)
                const model = await controller[methodName](options)
                const View = actionViews[methodName]
                if (View) {
                  const view = new View(container.cradle)
                  view.print(model)
                }
              })
              break
            }
          }
        })
    }
    Injectable()(constructor)
  }
}
