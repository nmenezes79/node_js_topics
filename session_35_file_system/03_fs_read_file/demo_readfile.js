// demo_readfile.js
// https://codepen.io/nmenezes79/pen/wvVoevB?editors=0010

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	// Open A File on The Server and Return Its Content
	fs.readFile('demofile1.html', function (err, data) {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8080);