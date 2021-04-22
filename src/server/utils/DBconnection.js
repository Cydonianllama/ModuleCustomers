const mongoose = require('mongoose');
require('dotenv').config()
const {
    DB_SUCCESFULLY_CONNECTED
} = require('../utils/constants')

mongoose
    .connect(process.env.DB_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(res=> {
        console.log(DB_SUCCESFULLY_CONNECTED);
    })
    .catch(err => {
        console.log('error in connection');
    });

module.exports = mongoose