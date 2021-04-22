import {render} from 'react-dom'
import React from 'react'

//states
import CustomerState from './states/CustomerState'

//components
import Dashboard from './dashboard/Dashboard'

const App = () => {

    return(
        <>
            <CustomerState>
                <Dashboard/>
            </CustomerState>
        </>
    )
}

render(<App/>,document.getElementById('root'))

