import { ForOptions, ActionInfo } from '../interfaces/action-info.interface'
import { get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Constructor } from 'awilix'
import { View } from '../interfaces/view.interface'

export function Action (action: ActionInfo) {
  return (target, methodName: string) => {
    const token = constructorToToken(target.constructor)
    addActionsForOptions(token, action.forOptions, methodName)
    addView(token, action.view, methodName)
  }
}

function addActionsForOptions (token: string, forOptions: ForOptions, methodName: string) {
  const { actionsForOptions } = get(token)
  actionsForOptions.push({ forOptions, methodName })
}

function addView (token: string, view: Constructor<View>, methodName: string) {
  const { actionViews } = get(token)
  actionViews[methodName] = view
}
