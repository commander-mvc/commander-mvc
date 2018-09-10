# commander-mvc

A model-view-controller wrapper for commander CLI framework

### Warning

This is a work in progress. Contributions are welcome.

## Install

```
$ npm install --save commander-mvc
```

# Example

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

# Contributors

- Martin Fracker <martin.frackerjr@gmail.com> (Affiliation: [Improving](https://www.improving.com))
