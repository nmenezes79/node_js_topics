// 03_renamefile.js
// https://codepen.io/nmenezes79/pen/bGPebVx?editors=0010

var fs = require('fs');

// Rename the File "mynewfile2.txt" TO "myrenamedfile.txt"
fs.rename('mynewfile1.txt', 'myrenamefile.txt', function (err) {
	if (err) throw err;
	console.log('File Renamed!')
})