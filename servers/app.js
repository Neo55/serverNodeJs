var http = require('http');

http.createServer(function(request, response) {
    console.log('Url: ' +  request.url);
    console.log('Query type: ' +  request.method);
    console.log('User agent: ' +  request.headers['user-agent']);
    console.log('All headers');
    
    response.end('http server text');
}).listen(3000);

