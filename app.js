var http = require('http');

var server = http.createServer( (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html"});
    response.end("<h1> APP " + process.env.INSTANCE + "</h1>");
});

server.listen(8080);