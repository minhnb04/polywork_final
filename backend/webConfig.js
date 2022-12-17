const config = require('./configs/_' + process.env.NODE_ENV_LOCAL);
const mongoose = require('mongoose');
const db = config.mongoURI;

module.exports = { connectDB };
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://topcv2022:baonq@cluster0.7gk8phl.mongodb.net/TopCV2022', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log(`Connect Database  successfully !!!`);
    } catch (err) {
        console.log(err);
    }
}
