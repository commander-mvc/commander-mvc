Controller
==========

A controller in commander-mvc is meant to act as a glue between the application
logic and the view. Controllers have access to your application's services (also
called injectables) through constructor injection. Constructor injection in
commander-mvc looks like this:

.. code-block:: javascript

  constructor ({ myService }) {
    this.myService = myService
  }

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

Action
~~~~~~

An action in commander-mvc is an endpoint. When your application is invoked
from the commandline, one of the actions defined throughout it is called.

.. autofunction:: Action

.. autoclass:: ActionInfo
  :members:
