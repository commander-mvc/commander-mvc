Injectable
==========

There are two ways to create an injectable: either be using the
:meth:`Injectable` decorator, or by calling :meth:`provide`. A provider
can be used to resolve an instance using one of a few options. By using the
`Injectable` decorator, the DI framework will automatically choose the
`useConstructor` option. If you need more flexibility, you can use `provide`.

.. autofunction:: Injectable

.. autofunction:: provide

.. autoclass:: InjectableTableEntry
  :members:

.. autoclass:: Provider
  :members:

Example
~~~~~~~~~~~~~~~~~~

.. literalinclude:: ../examples/fragments/injectable.js
  :linenos:

As you can see, injectables themselves can inject other injectables. The
example also shows a custom provider.