## Install it!

```shell
npm i @fjrodafo/free-port
```

## Run it!

```js
// Import the module
const { findAvailablePort } = require('@fjrodafo/free-port')
```

```js
// It will find an available port in case port 3000 is busy
findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})
```

## Environment variable

```js
// You can create an environment variable for advanced use
const desiredPort = process.env.PORT ?? 3000

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})
```

## Links

Full repository on [github](https://github.com/FJrodafo/npm-free-port)/[gitlab](https://github.com/FJrodafo/npm-free-port).

Visit the npm package website [here](https://www.npmjs.com/package/@fjrodafo/free-port).