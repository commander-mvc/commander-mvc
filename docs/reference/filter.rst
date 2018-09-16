Exception Filter
================

Exception filters are used to catch exceptions your application throws and do
something with them. For example, you might want to catch a 403 http error and
display an unauthorized message to the user.

.. autofunction:: Catch

.. autoclass:: ExceptionFilter
  :members:

Example
-------

This example will catch `UnauthorizedError`, log the error, and print "Error
unauthorized" to the console.

.. literalinclude:: ../examples/fragments/filter.js
  :linenos:
