import React,{useContext} from 'react'
import CustomerContext from '../../../../context/CustomerContext'

const CreateModal = ({actions,active}) => {

    const customerContext = useContext(CustomerContext)

    const handleToCreateCustomer = () => {

        const form = document.forms['customer-creation-form']

        let firstName = form['firstName'].value
        let lastName = form['lastName'].value
        let email = form['email'].value
        let phoneNumber = form['phoneNumber'].value

        const Customer = () => {
            return {
                firstName,
                lastName,
                email,
                phoneNumber
            }
        }

        customerContext.create(Customer())

        //comunication between high order component
        actions.setDataHint([{msg : 'customer created'}])

        form.reset()
    }

    const FormCreate = () => {
        return(
            <div>
                <div>
                    <button className = "btn-close-modal" onClick={() => {
                        actions.closeModal()
                    }}>close</button>
                </div>
                <form id="customer-creation-form" className="modal">
                    <input type="text" placeholder="firstName" name="firstName" />
                    <input type="text" placeholder="lastName" name="lastName" />
                    <input type="text" placeholder="email" name="email" />
                    <input type="text" placeholder="phoneNumber" name="phoneNumber" />
                    <button type="button" onClick={handleToCreateCustomer}>
                        create
                    </button>
                </form>
            </div>
        )
    }

    return(
        <>
            {active ? <FormCreate/> : '' }
        </>
    )
}

export default CreateModal;