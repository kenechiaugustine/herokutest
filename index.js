const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, Welcome to my page</h1>');

        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');

        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Error occurred</h1>');

        res.end();
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});