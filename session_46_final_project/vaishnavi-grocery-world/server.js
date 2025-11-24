const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8080;

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root123',
	database: 'vaishnavi_grocery_world'
});

db.connect(err => {
	if (err) {
		console.error('MySQL Connection Failed:', err);
		return;
	}
	console.log('Connected To MySQL');
});

// Landing Page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Home Page
app.get('/home', (req, res) => {
	db.query('SELECT * FROM products', (err, results) => {
		if (err) throw err;
        console.log(results);
		let productsHTML = results.map(product => `
    <div class="product">
        <img src="${product.image_url}" alt="${product.p_name}" />
        <h3>${product.p_name}</h3>
        <p>Price: ₹${product.p_price}</p>
    </div>
    `).join('');

		res.send(`
    <html>
        <head>
        <title>Grocery World - Home</title>
        <link rel="stylesheet" href="/style.css">
        </head>
        <body>
        <nav>
            <a href="/">Landing</a>
            <a href="/home">Home</a>
        </nav>
        <header>
            <h1>Welcome to Grocery World</h1>
            <p>Your one-stop online grocery shop!</p>
        </header>
        <section class="products">
            ${productsHTML}
        </section>
        <footer>© 2025 Vaishanvi's Grocery World</footer>
        </body>
    </html>
    `);
	});
});

// Start Server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});