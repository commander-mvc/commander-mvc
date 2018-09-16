Contributing
============

Contributions are welcome! This might mean generating issues, contributing to
feature discussions, fixing up confusing documentation, and more. Your help
would be greatly appreciated!

New Features
------------

Check the issues to see if there are any feature requests you'd like to start a
pull request for. If there isn't already an issue, feel free to make one to
propose the feature.

Bugs
----

If you find any bugs, don't hesitate to create an issue for it. Be sure to check
to make sure no one has already reported it.

Development
-----------

.. code-block:: bash
  # build
  $ npm run build

  # test
  $ npm run test

Documentation
~~~~~~~~~~~~~

The documentation is built in the docs directory.
[Sphinx](https://www.sphinx-doc.org) is used to build the documentation.

.. code-block:: bash

  # install dependencies for building docs
  $ pip install -r requirements.txt

  # build
  $ make -C docs html

  # live reload at localhost:8000
  $ make -C docs livehtml

If you find any typos in the documentation or find that the documentation is
confusing, please feel free to create an issue or
submit a pull request directly.

Committing
~~~~~~~~~~

This project uses `angular style commit messages
<https://gist.github.com/stephenparish/9941e89d80e2bc58a153>`_ in order to
calculate next version when deploying as well as to generate release notes. Use
``npm run commit`` in order to help structure your commit according to these
conventions.
