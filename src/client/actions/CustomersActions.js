import {
    CUSTOMERS_GET_BY_PAGE_REQUEST,
    CUSTOMERS_GET_BY_PAGE_SUCCESS,
    CUSTOMERS_GET_BY_PAGE_FAIL
} from '../helpers/CustomerConstants'

export const getCustomer = async () => {

}

export const getCustomersByPage = async (page,dispatch) => {
    dispatch({
        type: CUSTOMERS_GET_BY_PAGE_REQUEST,
        payload : {
            costumers: [],
        }
    })
    let report = await fetch(`/api/customers/page/${page}`, {
        Method: 'GET',
        mode: 'cors'
    })
    .then(res => res.json())
    .then(report => {
        console.log(report);
        dispatch({
            type : CUSTOMERS_GET_BY_PAGE_SUCCESS,
            payload : {
                customers: report.msg.customers,
                count : report.msg.totalCustomers,
                currentPage : report.msg.currentPage
            }
        })
    })
    .catch((err)=>{
        dispatch({
            type : CUSTOMERS_GET_BY_PAGE_FAIL,
            payload : {
                isFailed : true,
                costumers: [],
            }
        })
    })
}

export const deleteCustomer = async (id,dispatch) => {

}

export const updateCustomer = async (customer,dispatch) => {
    console.log('customer for update : ',customer);
    await fetch(`/api/customers/${customer._id}`,{
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(customer)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

export const createCustomer = async (customer,dispatch) => {
    await fetch( `/api/customers`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}