Controller
==========

A controller in commander-mvc is meant to act as a glue between the application
logic and the view. Controllers have access to your application's services (also
called injectables) through constructor injection.

.. autofunction:: Controller

.. autoclass:: ControllerInfo
  :members:

  See `commander.js <https://www.github.com/tj/commander.js>`_ for more
  information on the construction of `command` and `option`.

.. note::

  Use the :class:`HasArg` interface when your command takes an argument to help
  remember what the argument is supposed to be.

.. autoclass:: HasArg
  :members:

.. warning::

  The `arg` property is only properly set during the execution of an
  ``Action``. It will not be defined at the time the controller is constructed.

Controller Example
------------------

.. literalinclude:: ../examples/fragments/controller.js
  :linenos:
  :lines: 1-13

Action
~~~~~~

An action in commander-mvc is an endpoint. When your application is invoked
from the commandline, one of the actions defined throughout it is called.

.. autofunction:: Action

.. autoclass:: ActionInfo
  :members:

Action Example
--------------

Continuing from the controller example above:

.. literalinclude:: ../examples/fragments/controller.js
  :lineno-start: 15
  :lines: 15-


