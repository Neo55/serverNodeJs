var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    console.log(`request address ${request.url}`);

    if (request.url == '/example.doc') {
        var filePath = request.url.substr(1);

            response.writeHead(200, {'Content-Type': 'application/msword'})
            fs.createReadStream('./public/example.doc').pipe(response);
    } else {
        response.end('Success !');
    }
}).listen(3000);