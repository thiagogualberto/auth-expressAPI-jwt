const Product = require('../models/Products');

module.exports = {
    //Route to list products
    async listProducts (req, res) {
        return res.json(products);
    },

    //Route to create a product
    async createProducts (req, res) {
        const { name, price } = req.body;

        if (!name || !price)
            return res.status(400).json({ message: 'Invalid entries. Try again.'});

        const productExists = await Product.findOne({ name });
        if (productExists)
            return res.status(409).json({ message: 'Product already registered.'});

        const data = {
            name,
            price
        }

        const product = await Product.create(data);

        return res.json(product);
    }
};
