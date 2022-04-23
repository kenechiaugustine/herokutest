const http  = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to my HEROKU APP TEST\n');
    }
);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});