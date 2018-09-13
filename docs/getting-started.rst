Getting started
***************

Installation
============

Save the module to your application's node dependencies.

.. code-block:: bash

  $ npm install --save commander-mvc

Example Project
================

.. note::

  This example will utilize Babel and ES2017. However you can just as
  well use typescript for your own project. Since commander-mvc is written
  in typescript you will not have to install separate type definitions.

For this example, we will create a simple hello world project. The commandline
interface (CLI) we will create will print "Hello, world!" as a default message,
but will print "Hello, <name>" if the user specifies a name instead of the
default 'world.'

To get started, first create our project directory, and initialize it with npm.

.. code-block:: bash

  $ mkdir commander-mvc-hello
  $ cd commander-mvc-hello
  $ npm init -y

Then let's install all our dependencies.

.. code-block:: bash

  $ npm install --save @babel/cli @babel/core @babel/plugin-proposal-decorators @babel/polyfill @babel/preset-env commander-mvc

Setup the ``package.json`` so that it looks like below. The important fields to note are ``bin`` and ``script``.

.. literalinclude:: examples/hello/package.json
  :caption:
  :linenos:
  :emphasize-lines: 4-7

.. note::

  Some of these snippets (like the one above) are captioned with filenames such
  that you can find them in the docs directory of the main `repository
  <https://github.com/Towerism/commander-mvc/tree/develop/docs/examples/hello>`_.

Now, you will also need to add a ``.babelrc``.

.. literalinclude:: examples/hello/.babelrc
  :caption:
  :linenos:

Next, we will create our view: ``message.view.js``. Create a folder
called ``src``, and put ``message.view.js`` inside it.

.. literalinclude:: examples/hello/src/message.view.js
  :caption:
  :linenos:

Your project directory should now look like this:

.. code-block:: bash

  src/
    message.view.js
  .babelrc
  package-lock.json
  package.json

Now, create a service called ``hello.service.js`` where we will put our
program's main logic (determining whether we are saying hello to the world or a
specific person).

.. literalinclude:: examples/hello/src/hello.service.js
  :caption:
  :linenos:

Note the ``Injectable`` decorator. This decorator is what tells commander-mvc
that our class should be available to our controllers via dependency
injection (DI) through the constructor.

.. note::

  Technically it is also available to views via DI, but I
  think the view should just be concerned with printing simple messages.

The ``hello.controlier.js`` which we will be creating next will tie the view
and service together.

.. literalinclude:: examples/hello/src/hello.controller.js
  :caption:
  :linenos:

The controller is decorated with ``Controller``, which tells commander-mvc to
route the ``hello`` command to our controller with an optional ``name``
argument and no additional options. For more information about commands and
options, see `commander.js <https://www.github.com/tj/commander.js>`_.

The ``sayHello`` method is decorated with
``Action``, which tells commander-mvc that this method should be called to
handle those commands routed to our controller, and that it should render the
return value using the ``MessageView`` we created earlier.

.. note::

  The weird ``forOptions`` function is normally used when your controller has
  multiple actions and each action should only be called when particular
  options are given. For a given ``options`` object it should return whether or
  not the action should handle the command. In the future, the ``forOptions``
  function will be optional if it would just return true anyway.

The last file to create is ``index.js`` which will create the commander-mvc
context and run our CLI application.

.. literalinclude:: examples/hello/src/index.js
  :caption:
  :linenos:

.. note::

  Commander-mvc provides a default entrypoint. However, there is no way to
  specify a name and a version without overriding it. In the future, it will
  be easier to specify a name/version without overriding the default entrypoint.

Finally we can build and install our CLI. First ``cd`` into the root of the
project, and run the commands:

.. code-block:: bash

  $ npm run build
  $ npm install -g

Now you can run it like this:

.. code-block:: bash

  $ commander-mvc-hello --help
  1.0.0

  $ commander-mvc-hello --help
  Usage: index [options] [command]

  Options:

    -V, --version  output the version number
    -h, --help     output usage information

  Commands:

    hello [name]
  
  $ commander-mvc-hello hello
  Hello, world!

  $ commander-mvc-hello hello Martin
  Hello, Martin!