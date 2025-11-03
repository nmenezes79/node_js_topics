// 04_unlinkfile.js
// https://codepen.io/nmenezes79/pen/xxoOKZV?editors=0010

var fs = require('fs');

// Create An Empty File Named Mynewfile2.Txt
// Delete The File Mynewfile2.Txt

fs.unlink('myrenamefile.txt', function (err) {
	if (err) throw err;
	console.log('File Deleted!')
});