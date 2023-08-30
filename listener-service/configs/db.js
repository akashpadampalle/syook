const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/syook';
// process.env.DB_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});


db.once('open', () => {
    console.log(`db connected`);
})


module.exports = db;

