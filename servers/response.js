var http = require('http');

http.createServer(function(request, response) {
    response.setHeader('UserId', 12);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h2>Answer from Node</h2>");
    response.end();
}).listen(3000);

