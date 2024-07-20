const mongoose = require("mongoose");
require('dotenv').config();

//const dbURI = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL=process.env.MONGODB_URL_LOCAL;
//const mongoURL=process.env.MONGODB_URL;


mongoose.connect(mongoURL,{
    serverSelectionTimeoutMS: 30000
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

 const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected to mongoDB server");
});


module.exports = db;