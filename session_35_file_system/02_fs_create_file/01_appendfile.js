// 01_appendfile.js
// https://codepen.io/nmenezes79/pen/xxNKpqR

var fs = require('fs');

// Creating a New File using the appendFile() method
fs.appendFile('mynewfile1.txt', 'Hello Content!', function (err) {
	if (err) throw err;
	console.log('Saved!')
});