// 01_appendfile.js
// https://codepen.io/nmenezes79/pen/xxNKpqR?editors=0010

var fs = require('fs');

// Append Content at The End of The File
fs.appendFile('mynewfile1.txt', 'This is my Text which is been updated!.', function (err) {
	if (err) throw err;
	console.log('Updated!')
});