import { TakeArg, ForOptionsMethodPair, ViewMap, HasArg } from './interfaces'
import { container } from './container'
import { Options } from './interfaces/action-info.interface'
import { filterExceptions } from './filter-exceptions'
import { last, first } from 'lodash'

export function createActionHandler ({ token, actionsForOptions, actionViews }: {
  token: string,
  actionsForOptions: ForOptionsMethodPair[],
  actionViews: ViewMap
}) {
  return async (...args: any[]) => {
    const options: Options = last(args)
    const controller = container.resolve<HasArg & TakeArg>(token)
    const arg = first(args)
    if (controller.takeArg) {
      controller.takeArg(arg)
    }
    controller.arg = arg
    for (const { forOptions, methodName } of actionsForOptions) {
      if (forOptions(options)) {
        await filterExceptions(async () => {
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
  }
}
