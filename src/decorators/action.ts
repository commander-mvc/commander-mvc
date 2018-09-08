import { get } from '../controller-table'
import { constructorToToken } from '../constructor-to-token'

export function Action (action) {
  return (target, methodName) => {
    const token = constructorToToken(target.constructor)
    addActionsForOptions(token, action.forOptions, methodName)
    addView(token, action.view, methodName)
  }
}

function addActionsForOptions (token, forOptions, methodName) {
  const { actionsForOptions } = get(token)
  actionsForOptions.push({ forOptions, methodName })
}

function addView (token, view, methodName) {
  const { actionViews } = get(token)
  actionViews[methodName] = view
}
