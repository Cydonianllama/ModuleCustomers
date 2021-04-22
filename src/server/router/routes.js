const customerHandler = require('../API/CustomerAPI')

const routes = [
    {
        routeName : '/api/customers',
        routeHandler : customerHandler 
    }
]
module.exports = routes