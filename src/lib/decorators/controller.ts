import { HasArg } from '../interfaces/has-arg.interface'
import { addController, getController } from '../tables/controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from '../decorators/injectable'
import { first, last, each } from 'lodash'
import { filterExceptions } from '../filter-exceptions'
import { container } from '../container'
import { ControllerInfo, ViewMap, ControllerTableEntry, ForOptionsMethodPair } from '../interfaces/controller-table.interface'
import { Options } from '../interfaces/action-info.interface'
import { CommanderStatic } from 'commander'
import { createActionHandler } from '@app/lib/create-action-handler'

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
    const entry = addController(token, controller)
    const { actionsForOptions, actionViews } = entry
    registerCommand({ entry, token, actionsForOptions, actionViews })
    Injectable()(constructor)
  }
}

function registerCommand ({ entry, token, actionsForOptions, actionViews }: {
  entry: ControllerTableEntry,
  token: string,
  actionsForOptions: ForOptionsMethodPair[],
  actionViews: ViewMap
}) {
  entry.registerCommand = () => {
    const command: CommanderStatic = container.cradle.cliService
      .command(entry.command)
    registerCommandOptions({ entry, command })
    registerCommandAction({ command, token, actionsForOptions, actionViews })
  }
}

function registerCommandOptions ({ entry, command }: {
  entry: ControllerTableEntry, command: any
}) {
  each(entry.options, option => {
    command
      .option(...option)
  })
}

function registerCommandAction ({ command, token, actionsForOptions, actionViews }: {
  command: any
  token: string,
  actionsForOptions: ForOptionsMethodPair[],
  actionViews: ViewMap
}) {
  command
    .action(createActionHandler({
      actionsForOptions, actionViews, token
    }))
}
