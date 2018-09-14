import { View } from './view.interface'
import { Constructor } from 'awilix'

/**
 * Meta information for an action
 */
export interface ActionInfo {
  /**
   * Constructor for the view that will render the result of the action.
   */
  view?: Constructor<View>

  /**
   * A function that specifies what options the action should handle.
   * For example, ``({ list, products }) => list && products``, indicates
   * the action should handle options in which --list and --products
   * are both set.
   */
  forOptions: ForOptions
}

export const DEFAULT_ACTION_INFO = { forOptions: () => true }

export type Option = string | boolean | Array<string>

export interface Options {
  [key: string]: Option
}

export type ForOptions = (options: Options) => boolean
