const Model = require('../utils/DBconnection')
const CustomerSchema = new Model.Schema(
    {
        firstName : String,
        lastName : String,
        email : String,
        phoneNumber : String
    },
    {
        timestamps : true
    }
)
const Customer = Model.model('Customer',CustomerSchema)
module.exports = Customer
