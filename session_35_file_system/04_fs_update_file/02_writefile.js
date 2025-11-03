// 02_writefile.js
// https://codepen.io/nmenezes79/pen/XWLKrmJ?editors=0010

var fs = require('fs');

// Replace The File with A New One (As the File Already Exist)
fs.writeFile('mynewfile1.txt', 'This is replaced Text!!!', function (err) {
	if (err) throw err;
	console.log('Replaced!')
});