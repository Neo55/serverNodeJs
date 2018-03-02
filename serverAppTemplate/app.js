var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    fs.readFile('./public/index.html', 'utf8', function(error, data){
        var name = 'Jerry';
        var age = 54;

        data = data.replace('{name}', name).replace('{age}', age);

        response.end(data);
    });
}).listen(3000);