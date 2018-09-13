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