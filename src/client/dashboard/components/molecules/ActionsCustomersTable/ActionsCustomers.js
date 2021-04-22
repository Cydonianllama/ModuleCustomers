import React from 'react'
import './Styles.css'
const ActionsCustomers = ({actions}) => {

    const handleCreateNewCustomer = () => {
        actions.openCreateModal()
    }

    const handleUpdateCurrentCustomerSelected = () => {
        if (actions.countSelectedCustomers() >= 1) { 
            actions.openUpdateModal()
        }else{
            actions.setDataHint([{ msg: 'no customer selected' }])
        }
    }

    return(
        <>
            <div className = "container-table-actions">
                <button onClick={handleCreateNewCustomer}>
                    create new Customer
                </button>
                <button onClick={handleUpdateCurrentCustomerSelected}>
                    edit selected
                </button>
            </div>
        </>
    )
}

export default ActionsCustomers