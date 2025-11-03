// fs1.js
// demofile1.html
// https://codepen.io/nmenezes79/pen/OJepZoK?editors=0010

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	// OPEN A FILE ON THE SERVER AND RETURN ITS CONTENT:
	fs.readFile('demofile1.html', function (err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8080);