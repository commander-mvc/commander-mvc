Controller and Action
=====================

Controller
----------

A controller in commander-mvc is meant to act as a glue between the application
logic and the view. Controllers have access to your application's services (also
called injectables) through constructor injection.

.. autofunction:: Controller

.. include:: _initialize-with-context.rst

.. autoclass:: ControllerInfo
  :members:

  See `commander.js <https://www.github.com/tj/commander.js>`_ for more
  information on the constructions of `command` and `option`.

.. autoclass:: TakeArg
  :members:

.. autoclass:: HasArg
  :members:

Example
~~~~~~~

.. literalinclude:: ../examples/fragments/controller.js
  :linenos:
  :lines: 1-13

Action
------

An action in commander-mvc is an endpoint. When your application is invoked
from the commandline, one of the actions defined throughout it is called.

.. autofunction:: Action

.. autoclass:: ActionInfo
  :members:

Example
~~~~~~~

Continuing from the controller example above:

.. literalinclude:: ../examples/fragments/controller.js
  :lineno-start: 15
  :lines: 15-
