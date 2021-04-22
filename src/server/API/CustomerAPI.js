const express = require('express')
const router = express.Router()

const controller = require('../components/customer/CustomerController')

//API - additonals
router.get('/page/:page',controller.getCustomersByPage)

//API - generics
router.get('/:id',controller.getCustomer)
router.post('/',controller.createCustomer)
router.put('/:id',controller.updateCustomer)
router.delete('/:id',controller.deleteCustomer)

module.exports = router