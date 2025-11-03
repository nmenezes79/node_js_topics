// 02_openfile.js
// https://codepen.io/nmenezes79/pen/BaeBJWq?editors=0010

var fs = require('fs');

// Creating a New, Empty file using the openFile() method
fs.open('mynewfile2.txt', 'w', function (err, file) {
	if (err) throw err;
	console.log('Saved!')
});