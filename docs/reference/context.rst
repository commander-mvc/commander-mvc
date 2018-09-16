Context and EntryPoint
======================

Context
-------

.. autofunction:: initializeContext

.. autoclass:: ContextInitialization
  :members:

EntryPoint
----------

.. autofunction:: EntryPoint

.. note::

  A custom interface must inject `cliService` and call `cliService.parse` in
  the `run` method. The :class:`Runnable` interface can be used to help remember
  to specify a `run` method.

.. autoclass:: Runnable
  :members:

Example
-------

.. literalinclude:: ../examples/fragments/context.js
  :linenos:
