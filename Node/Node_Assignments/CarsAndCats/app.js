var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cars.jpg') {
        fs.readFile('./images/cars.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cats.jpg') {
        fs.readFile('./images/cats.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!');
    }
});

server.listen(6789);
console.log("listening on port 6789");

