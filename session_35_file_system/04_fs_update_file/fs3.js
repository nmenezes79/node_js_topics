// fs3.js
// https://codepen.io/nmenezes79/pen/YzoWKqx?editors=0010

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Content!', function (err) {
	if (err) throw err;
	console.log('Saved!');
});	