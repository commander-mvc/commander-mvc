import { View } from './view.interface'
import { Constructor } from 'awilix'

/**
 * Meta information for an action
 */
export interface ActionInfo {
  /**
   * Constructor for the view that will render the result of the action.
   * The return value of the action will be used the as the model and
   * passed to the ``print`` method of the view.
   */
  view?: Constructor<View>

  /**
   * A function that specifies what options the action should handle.
   * For example, ``({ list, products }) => list && products``, indicates
   * the action should handle options in which ``--list`` and ``--products``
   * are both set. When determining which action commander-mvc will execute,
   * it will visit each one in the order that they are defined. The first
   * (and only the first) action for which ``forOptions(options)`` returns
   * true will be executed. If omitted, it will be always executed when
   * visited commander-mvc.
   */
  forOptions: ForOptions
}

export const DEFAULT_ACTION_INFO = { forOptions: () => true }

export type Option = string | boolean | Array<string>

export interface Options {
  [key: string]: Option
}

export type ForOptions = (options: Options) => boolean
