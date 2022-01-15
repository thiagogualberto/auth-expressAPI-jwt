const { Double } = require('mongodb');
const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

const products = mongoose.model('products', ProductModel);

module.exports = products;