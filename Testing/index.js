const http = require('node:http');
const { findAvailablePort } = require('@fjrodafo/free-port');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
    console.log('Request received!', req.url);
    res.end('Hello, World!');
});

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
});
