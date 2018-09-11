from setuptools import setup

setup(
  name='docs',
  packages=['docs'],
  install_requires=['sphinx-js'],
  scripts=[
    'scripts/install-typedoc'
  ]
)