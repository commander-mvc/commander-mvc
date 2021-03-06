Exception Filter
================

Exception filters are used to catch exceptions your application throws and do
something with them. For example, you might want to catch a 403 http error and
display an unauthorized message to the user.

.. autofunction:: Catch

.. autoclass:: ExceptionFilter
  :members:

.. important::

  If multiple exception filters would catch an exception, only the first one
  will catch it based on the order the exception filters are given in
  :attr:`ContextInitialization.providers`. Therefore, when using a catch-all
  exception filter, it should generally be the last exception filter in
  :attr:`ContextInitialization.providers`.

Example
-------

This example will catch `UnauthorizedError`, log the error, and print "Error
unauthorized" to the console.

.. literalinclude:: ../examples/fragments/filter.js
  :linenos:
