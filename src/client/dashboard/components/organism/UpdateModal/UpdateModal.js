import React,{useState,useEffect,useContext} from 'react'

import CustomerContext from '../../../../context/CustomerContext'

const UpdateModal = ({ active, actions, currentCustomer}) => {

    const [_id,setId] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if(currentCustomer[0]){
            console.log('update current customer',currentCustomer);
            setFirstName(currentCustomer[0].firstName)
            setLastName(currentCustomer[0].lastName)
            setEmail(currentCustomer[0].email)
            setPhoneNumber(currentCustomer[0].phoneNumber)
            setId(currentCustomer[0]._id)
        }
    }, [currentCustomer])
    
    const customerContext = useContext(CustomerContext)

    const handleToUpdateCustomer = (customer) => {
        const formModal = document.forms['modal-update']
        console.log(formModal);
        customerContext.update(customer)
        formModal.reset()
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setId('')
        actions.setDataHint([{ msg: 'customer updated' }])
        actions.closeModal()
    }

    
    return(
        <>
            {active ? 
            <div>
                <div>
                        <button className="btn-close-modal" onClick={() => { actions.closeModal() }}>
                        close
                    </button>
                </div>
                <form className="modal" name="modal-update">
                    <input type="text" placeholder="firstName" name="updateFirstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                    <input type="text" placeholder="lastName" name="updateLastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }}
                    />
                    <input type="text" placeholder="email" name="updateEmail"
                        value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="text" placeholder="phoneNumber" name="updatePhoneNumber"
                        value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    <button type="button" onClick={() => {
                        handleToUpdateCustomer({
                            _id,
                            firstName,
                            lastName,
                            email,
                            phoneNumber,
                        })
                    }}>
                        update
                </button>
                </form>
            </div>
             : ''}
        </>
    )
}

export default UpdateModal