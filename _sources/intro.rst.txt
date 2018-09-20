Introduction
************

What is commander-mvc?
======================

Commander-mvc is a wrapper around the popular commandline argument parser and
action dispactcher, `commander.js <https://www.github.com/tj/commander.js>`_.
It allows you to develop elegant user interfaces using an out-of-the-box
model-view-controller architecture.

Motivation
==========

Testability and circular imports are the two biggest motivators for designing
commander-mvc. Commander-mvc comes out of the box with a power dependency
injection framework in `awilix <https://github.com/jeffijoe/awilix>`_. This
alone makes testing individual components much easier and reduces the tendency
to import everything every which way winding up with spaghetti code. The MVC
architecture naturally evolved as a way to shield the developer from the
difficult-to-test aspect of commander.js.

When should you use it?
==================================

You should use commander-mvc when you want to build a large, complex CLI
application. One with multiple sub-commands and tons of options. Commander-mvc
supercharges your application with dependency injection and offers a way to
breakdown the definition of your CLI into smaller, more easily testable pieces.

Features
========

- MVC architecture
- Dependency injection with singleton and transient lifetimes
- Use exception filtering to keep exception messages you want to display out of your application logic
- Ability to easily create a rich, testable, modular CLI
- Written in TypeScript, so need to install separate type definitions.
- Features provided by commander.js such as

  - Automated help text
  - Several argument/option types
  - Custom option validation/parsing
  - and more...

Support
=======

You can help by contributing on `Github
<https://www.github.com/commander-mvc/commander-mvc>`_. Be sure to checkout the
guidelines for :doc:`contributing`.