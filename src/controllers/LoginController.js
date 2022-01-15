const User = require('../models/Users');

module.exports = {
    //Route to login
    async login (req, res) {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(401).json({ message:'All fields must be filled.' });
        
        const userExists = User.findOne({ username, password });
        if (!userExists)
            return res.status(401).json({ message: 'Incorrect username or password.' })

        //Criar aqui a parte do token

        return res.status(200).json({ token });
    }
};
