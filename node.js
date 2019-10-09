var http=require('http');

var Request=require('request');

var port = 80;


var host =process.env.HOST;

var s = http.createServer();

console.log("Hello world");

s.listen(port);
