const User = require('../models/Users');

module.exports = {
    //Route to list users
    async listUsers (req, res) {
        return res.json(users);
    },

    //Route to create a user
    async createUser (req, res) {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).json({ message: 'Invalid entries. Try again.'});

        const userExists = await User.findOne({ username });
        if (userExists)
            return res.status(409).json({ message: 'Username already registered.'});

        const data = {
            username,
            password
        }

        const user = await User.create(data);

        return res.json(user);
    }
};
