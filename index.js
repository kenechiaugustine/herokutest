const http  = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
    }
);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});