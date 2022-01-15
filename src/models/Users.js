const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const users = mongoose.model('users', UserModel);

module.exports = users;