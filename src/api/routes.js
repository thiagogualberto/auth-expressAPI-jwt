const express = require('express');

const routes = express.Router();

const users = [];
const products = [];

function checkUserExists(req, res, next) {
    if (!req.body.username) {
        return res.status(400).json({ error: 'Username is required.' });
    }

    return next();
}

routes.get('/users', (req, res) => {
    return res.json(users);
})
routes.get('/products', (req, res) => {
    return res.json(products);
})

//Route to create a user
routes.post('/users', checkUserExists, (req, res) => {
    const { username, password } = req.body;

    const user = {
        username,
        password
    }

    users.push(user);

    return res.json(user);
})

//Route to login to the application 
routes.post('/login', (req, res) => {
    return res.json()
})

//Route to create a product
routes.post('/product', (req, res) => {
    const { name, price } = req.body;

    const product = {
        name,
        price
    }

    products.push(product)

    return res.json(product);
})

module.exports = routes;