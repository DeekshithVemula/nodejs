var http=require('http');

var Request=require('request');

var port = 80;



var s = http.createServer();

s.on('request', function(request, response) {


response.write("Hello World!");
        response.end();
    });



console.log("In the logs");


s.listen(port);
