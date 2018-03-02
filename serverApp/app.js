var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    console.log(`request address ${request.url}`);

    if (request.url.startsWith('/public/')) {
        var filePath = request.url.substr(1);

        fs.readFile(filePath, function(error, data) {
            if (error) {
                response.statusCode = 404;
                response.end('Resource not found!');
            } else {
                response.end(data);
            }
            return;
        })
    } else {
        response.end('Success !');
    }
}).listen(3000);