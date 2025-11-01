// 01_example.js

var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html'});
	res.end("TECHNOLOGY One!!!");
	
}).listen(8080);