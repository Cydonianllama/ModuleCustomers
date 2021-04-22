const customerService = require('../../services/CustomerService')

//response API handler 
const response = require('../../utils/response')

// advices 
const {
    ERROR_API_CUSTOMER_NEED_BODY_DATA,
    ERROR_API_CUSTOMER_NEED_ID_CUSTOMER,
    ERROR_API_CUSTOMER_NEED_PAGE_QUERY
}= require('../../utils/constants')

/*
    validate :
        - params : 
            - id
*/
const getCustomer = async (req,res) => {
    const Customerid = req.params.id
    if (Customerid){
        let report = await customerService.findOne(Customerid)
        response('ok',report,res)
    }else{
        response('bad request', ERROR_API_CUSTOMER_NEED_ID_CUSTOMER,res)
    }
}

/*
    validate :
        - params 
            - page number
*/
const getCustomersByPage = async (req,res) => {
    const page = req.params.page 
    console.log(page)
    if(page){
        let report = await customerService.findByPage(page)
        response('ok',report,res)
    }else{
        response('bad request', ERROR_API_CUSTOMER_NEED_PAGE_QUERY,res)
    }
}

/*
    validate :
        - params
            - id
        - body 
            - data customer
*/
const updateCustomer = async    (req,res) => {
    const CustomerID = req.params.id
    const CustomerData = req.body
    if (CustomerID) {
        if (CustomerData){
            let status = await customerService.update(CustomerID,CustomerData)
            response('ok',status,res)
        }else{
            response('bad request', ERROR_API_CUSTOMER_NEED_BODY_DATA,res)
        }
    }else{
        response('bad request', ERROR_API_CUSTOMER_NEED_ID_CUSTOMER,res)
    }
}

/*
    validate :
        - params :
            - id
*/
const deleteCustomer = async (req,res) => {
    const CustomerID = req.params.id
    if (CustomerID) {
        let status = await customerService.delete(CustomerID)
        response('ok',status,res)
    }else{
        response('bad request', ERROR_API_CUSTOMER_NEED_ID_CUSTOMER,res)
    }
}

/*
    validate :
        - body ;
            - data customer
*/
const createCustomer = async (req,res) => {
    let customer = req.body
    console.log('customer :',customer);
    if(customer){
        let report = await customerService.create(customer)
        response('ok',report,res)
    }else{
        response('bad request', ERROR_API_CUSTOMER_NEED_BODY_DATA,res)
    }
}

module.exports = {
    getCustomer,
    getCustomersByPage,
    updateCustomer,
    deleteCustomer,
    createCustomer
}