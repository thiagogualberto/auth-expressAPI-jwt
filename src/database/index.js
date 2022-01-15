const mongoose = require('mongoose');

const MONGO_DB_URL = 'mongodb://localhost:27017/aulaJWT';

async function main() {
    await mongoose.connect(MONGO_DB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
}

main().then(() => {
    console.log('Connect to MongoDB.');
}).catch((err) => {
    console.log(err);
})
