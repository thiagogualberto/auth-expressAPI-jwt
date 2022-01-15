const express = require('express');

const routes = express.Router();


//Controllers
const UserController = require('../controllers/UserController');
const ProductsController = require('../controllers/ProductsController');
const LoginController = require('../controllers/LoginController');


//User Routes
routes.get('/users', UserController.listUsers);
routes.post('/users', UserController.createUser);

//Products Routes
routes.get('/products', ProductsController.listProducts);
routes.post('/products', ProductsController.createProducts);

//Login Route
routes.post('/login', LoginController.login)

module.exports = routes;