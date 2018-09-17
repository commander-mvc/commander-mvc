import { ForOptionsMethodPair, ViewMap } from './interfaces/controller-table.interface'
import { HasArg } from './interfaces/has-arg.interface'
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
    const controller = container.resolve<HasArg>(token)
    for (const { forOptions, methodName } of actionsForOptions) {
      if (forOptions(options)) {
        await filterExceptions(async () => {
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
  }
}
