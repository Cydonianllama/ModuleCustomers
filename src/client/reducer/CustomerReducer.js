import {
    CUSTOMERS_GET_BY_PAGE_FAIL,
    CUSTOMERS_GET_BY_PAGE_REQUEST,
    CUSTOMERS_GET_BY_PAGE_SUCCESS,
    CUSTOMERS_UPDATE_FAIL,
    CUSTOMERS_UPDATE_REQUEST,
    CUSTOMERS_UPDATE_SUCCESS,
    CUSTOMER_CREATE_REQUEST,
    CUTSOMER_CREATE_FAIL,
    CUSTOMER_CREATE_SUCCESS,
    CUSTOMER_DELETE_FAIL,
    CUSTOMER_DELETE_REQUEST,
    CUSTOMER_DELETE_SUCCESS,
    CUSTOMER_GET_ERROR,
    CUSTOMER_GET_REQUEST,
    CUSTOMER_GET_SUCCESS,
} from '../helpers/CustomerConstants'

export const createCustomerReducer = (state,action) => {
    switch(action.type){
        case CUSTOMER_CREATE_REQUEST:
            return {
                isCreated : action.payload.status
            }
        case CUSTOMER_CREATE_SUCCESS:
            return {

            }
        case CUTSOMER_CREATE_FAIL:
            return {

            }
    }
}
export const getCustomersByPageReducer = (state,action) => {
    switch(action.type){
        case CUSTOMERS_GET_BY_PAGE_REQUEST:
            return {
                customers : []
            }
        case CUSTOMERS_GET_BY_PAGE_SUCCESS:
            return {
                count : action.payload.count,
                customers: [...action.payload.customers]
            }
        case CUSTOMERS_GET_BY_PAGE_FAIL:
            return {
                customers : []
            }
    }
} 

export const getCustomerReducer = (state,action) => {
    switch(action.type){
        case CUSTOMER_GET_REQUEST:
            return {
                customers : []
            }
        case CUSTOMER_GET_SUCCESS:
            return {
                customers : action.customers
            }
        case CUSTOMER_GET_ERROR:
            return {
                customers : []
            }
    }
}

export const updateCustomerReducer = (state,action) => {
    switch(action.type){
        case CUSTOMERS_UPDATE_REQUEST:
            return {
                response : {}
            }
        case CUSTOMERS_UPDATE_SUCCESS:
            console.log(action);
            return {
                response : action.payload
            }
        case CUSTOMERS_UPDATE_FAIL:
            return {
                response : {}
            }
    }
}