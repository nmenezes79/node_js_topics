// s30_hw.js
// save_water.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	// OPEN A FILE ON THE SERVER AND RETURN ITS CONTENT:
	fs.readFile('save_water.html', function (err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
}).listen(8082);