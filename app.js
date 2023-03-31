// HTTP MODULE
// const http = require('http');
// const server = http.createServer(( req, res ) => {
//     if(req.url === '/') {
//         res.write('Hello from node js');
//         res.end()
//     } else {
//         res.write('using some other domain');
//         res.end()
//     }
// });

// server.listen(8080)

// SERVING STATIC FILES WITH HTTP AND FILE SYSTEM MODULES
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.ReadStream('./static/index.html');
    res.writeHead(200, {'Content-type': 'text/html'})
    readStream.pipe(res);
}).listen(3000)
