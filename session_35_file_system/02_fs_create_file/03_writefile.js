// 03_writefile.js
// https://codepen.io/nmenezes79/pen/rNgBpmO

var fs = require('fs');

// Creating a New, Empty file using the writeFile() method
fs.writeFile('mynewfile1.txt', 'This is another Hello Content!!!', function (err) {
	if (err) throw err;
	console.log('Saved!')
})