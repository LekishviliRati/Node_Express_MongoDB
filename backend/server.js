const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Serveur');
});

server.listen(process.env.PORT || 3000);
