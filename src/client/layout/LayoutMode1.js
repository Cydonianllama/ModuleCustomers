import React from 'react'

import Nav from '../shared/components/organism/Nav/Nav'
import Footer from '../shared/components/organism/Footer/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;