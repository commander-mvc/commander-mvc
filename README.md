# commander-mvc

[![Build Status](https://travis-ci.org/Towerism/commander-mvc.svg?branch=master)](https://travis-ci.org/Towerism/commander-mvc)
[![Codecov branch](https://img.shields.io/codecov/c/github/towerism/commander-mvc/master.svg)](https://codecov.io/gh/Towerism/commander-mvc)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm (tag)](https://img.shields.io/npm/v/commander-mvc/latest.svg)](https://www.npmjs.com/package/commander-mvc)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A model-view-controller wrapper for commander CLI framework

### Warning

This is a work in progress. Contributions are welcome. Be sure to checkout the [CONTRIBUTING guidelines](.github/CONTRIBUTING.md).

## Install

```
$ npm install --save commander-mvc
```

## Documentation

Go read the [Commander MVC Documentation](https://towerism.github.io/commander-mvc). Built using [Sphinx](https://www.sphinx-doc.org) [TypeDoc](https://github.com/TypeStrong/typedoc).

## Example

The simplest CLI requires just a controller. This example will
also use a view in order to keep `console.log` out of the controller.

``` javascript
// hello.controller.js

@Controller({
  command: 'hello',
  options: [
    ['-n, --name <name>', 'name to use', 'world'],
  ]
})
export class HelloController {
  @Action({
    forOptions: () => true,
    view: HelloView
  })
  helloName ({ name }) {
    return name
  }
}
```

``` javascript
// hello.view.js

export class HelloView {
  print (name) {
    console.log(`Hello, ${name}`)
  }
}
```

``` javascript
// my-cli.js

const { run } = initializeContext({
  providers: [
    HelloController
  ]
})

run(process.argv)
```

Assume you install your app as `my-cli` and it can be run like so:

``` bash
$ my-cli --help
Usage: my-cli [options] [command]

Options:

  -V, --version    output the version number
  -h, --help       output usage information

Commands:

  hello [options]

$ my-cli hello
Hello, world

$ my-cli hello --name John
Hello, John
```

## Development

``` bash
# build
$ npm run build

# test
$ npm run test
```

### Documentation

The documentation is built in the docs directory: `cd docs`.
[Sphinx](https://www.sphinx-doc.org) is used to build the documentation.

``` bash
# build
$ make html

# live reload at localhost:8000
$ make livehtml
```


## Projects using commander-mvc

If you use commander-mvc, feel free to add your project to this list:

- [YNAB CLI](https://www.github.com/towerism/ynab-cli)

## Contributors

- Martin Fracker <martin.frackerjr@gmail.com> (Affiliation: [Improving](https://www.improving.com))
