import React,{useState} from 'react'

import './Dashboard.css'
import '../shared/styles/modal.css'

//components
import CreateModal from './components/organism/CreateModal/CreateModal'
import UpdateModal from './components/organism/UpdateModal/UpdateModal'
import Layout from '../layout/LayoutMode1'
import TableCustomer from './components/organism/TableCustomer/TableCustomer'
import ActionsCustomers from './components/molecules/ActionsCustomersTable/ActionsCustomers'
import Hint from '../shared/components/organism/Hint/Hint'

const Dashboard = () => {
    
    const [state,setState] = useState({
        currentModalOpen : null,
        modalCreateState : false,
        modalUpdateState : false,
        currentCustomersSelected : []
    }) 

    const [msgs,setMsgs] = useState({
        msgs : []
    })

    const setDataHint = (msgs) => {
        setMsgs({msgs})
    }

    const closeModal = () => {
        console.log('cierrate');
        const modalContainer = document.getElementById('modals-dashboard')
        modalContainer.style.zIndex = '-1'
    }

    const openUpdateModal = () => {
        const modalContainer = document.getElementById('modals-dashboard')
        modalContainer.style.zIndex = '2'
        setState({
            currentModalOpen: 'update',
            modalCreateState: false,
            modalUpdateState: true,
            currentCustomersSelected: state.currentCustomersSelected
        })
    }

    const openCreateModal = () => {
        const modalContainer = document.getElementById('modals-dashboard')
        modalContainer.style.zIndex = '2'
        setState({
            currentModalOpen: 'create',
            modalCreateState: true,
            modalUpdateState: false,
            currentCustomersSelected: []
        })
    }

    const countSelectedCustomers = () => {
        return state.currentCustomersSelected.length
    }

    const populateCurrentCustomers = (customers) => {
        setState({
            currentModalOpen: null,
            modalCreateState: false,
            modalUpdateState: false,
            currentCustomersSelected : customers,
        })
    }

    const getCustomersSelected = () => {
        return [...state.currentCustomersSelected]
    }

    return(
        <>
            <Layout>
                <Hint data={msgs}/>
                <ActionsCustomers 
                    actions={{
                        openCreateModal,
                        openUpdateModal,
                        countSelectedCustomers,
                        setDataHint
                    }}
                />
                <TableCustomer 
                    actions={{
                        populateCurrentCustomers,
                    }}
                />
                <div id = "modals-dashboard" >
                    <CreateModal
                        active={state.modalCreateState}
                        actions = {{
                            closeModal,
                            setDataHint
                        }}
                    />
                    <UpdateModal
                        active={state.modalUpdateState}
                        actions={{
                            openUpdateModal,
                            closeModal,
                            getCustomersSelected,
                            setDataHint
                        }}
                        currentCustomer={state.currentCustomersSelected}
                    />
                </div>
                
            </Layout>
        </>
    )
}

export default Dashboard