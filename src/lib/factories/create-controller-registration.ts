import { each } from 'lodash'
import { addController } from '../tables/controller-table'
import { constructorToToken } from '../constructor-to-token'
import { Injectable } from '../decorators/injectable'
import { container } from '../container'
import { ControllerInfo, ControllerTableEntry } from '../interfaces/controller-table.interface'
import { CommanderStatic } from 'commander'
import { createActionHandler } from '../create-action-handler'
import { Constructor } from 'awilix'
import { registrationKeys } from '../registration-keys'

export function createControllerRegistration ({ constructor, controllerInfo }: {
  constructor: Constructor<any>,
  controllerInfo: ControllerInfo
}) {
  constructor[registrationKeys.injectable] = () => {
    const token = constructorToToken(constructor)
    const entry = addController(token, controllerInfo)
    registerCommand({ entry, token })
    Injectable()(constructor)
  }
}

function registerCommand ({ entry, token }: {
  entry: ControllerTableEntry,
  token: string
}) {
  entry.registerCommand = () => {
    const command: CommanderStatic = container.cradle.cliService
      .command(entry.command)
    registerCommandOptions({ entry, command })
    registerCommandAction({ entry, command, token })
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

function registerCommandAction ({ entry, command, token }: {
  entry: ControllerTableEntry
  command: any
  token: string
}) {
  const { actionsForOptions, actionViews } = entry
  command
    .action(createActionHandler({
      actionsForOptions, actionViews, token
    }))
}
