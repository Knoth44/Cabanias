import React from 'react'
import AlertC from '../components/Alerts/Alerts'
import Toast from '../components/Alerts/Toast'

const Layout = ({ children }) => {
 
    return (
        <>
            <AlertC/>
            <Toast/>
            {children}
        </>
    )
}

export default Layout