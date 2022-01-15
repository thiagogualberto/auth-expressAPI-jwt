const users = [];

module.exports = {
    //Route to list users
    async listUsers (req, res) {
        return res.json(users);
    },

    //Route to create a user
    async createUser (req, res) {
        const { username, password } = req.body;

        const user = {
            username,
            password
        }

        users.push(user);

        return res.json(users);
    }
};
