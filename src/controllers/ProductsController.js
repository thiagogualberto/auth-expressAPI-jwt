const products = [];

module.exports = {
    //Route to list products
    async listProducts (req, res) {
        return res.json(products);
    },

    //Route to create a product
    async createProducts (req, res) {
        const { name, price } = req.body;

        const product = {
            name,
            price
        }

        products.push(product);

        return res.json(products);
    }
};
