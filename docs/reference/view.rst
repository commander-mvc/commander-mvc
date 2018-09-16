View
=====

A view instance is automatically created when one is specified on an action,
after the action returns a value. The return value is used as the model and
passed to the :meth:`Print` method of the :class:`View` instance. Like
injectables and controllers, the view can also inject dependencies through the
constructor.

.. autoclass:: View
  :members:

.. note::

  You do not need to include views in :attr:`ContextInitialization.providers`
  when initializing the context. Just reference the view in the :meth:`Action`
  decorators that use them.

Example
-------

.. literalinclude:: ../examples/fragments/view.js
