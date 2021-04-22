import React,{useReducer} from 'react'
import CustomerContext from '../context/CustomerContext'

import {
    getCustomersByPage,
    createCustomer,
    updateCustomer,
} from '../actions/CustomersActions'
import {
    getCustomersByPageReducer,
    createCustomerReducer,
    updateCustomerReducer,
} from '../reducer/CustomerReducer'

const CustomerState = ({children}) => {

    const statesModals = {
        isCreated : false,   
    }

    const statesUpdate = {
        isUpdated: false,
    }

    const initStateCustomerDashboard = {
        count: 0,
        customers: [],
        currentPage: 1,
    }
    const [stateCustomers, dispatch] = useReducer(getCustomersByPageReducer,initStateCustomerDashboard)

    const [stateCreation, dispatchCreation] = useReducer(createCustomerReducer, statesModals)

    const [stateUpdating, dispatchUpdate] = useReducer(updateCustomerReducer, statesUpdate)

    const findByPage = (page) => {
        getCustomersByPage(page, dispatch)
    }

    const getCustomer = ()=>{
        console.log(stateCustomers);
    }

    const delete_ = (id) => {
        
    }

    const update = (customer) => {
        updateCustomer(customer, dispatchUpdate)
    }

    const create = (customer) => {
        createCustomer(customer,dispatchCreation)
    }

    return (
        <>
            <CustomerContext.Provider value={{
                getCustomer,
                delete_,
                create,
                update,
                findByPage,
                stateCustomers,
                stateCreation,
                stateUpdating,
            }}>
                {children}
            </CustomerContext.Provider>
        </>
    )
}

export default CustomerState