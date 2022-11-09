import React from "react"
import Footer from "../components/Footer/Footer"
import NavbarComponent from "../components/Navbar/NavbarComponent"
import MetodosPagoC from "../components/MetodosPago/MetodosPago"

function MetodosPago(){
    return (
        <div className="main-content">
            <NavbarComponent />
            <MetodosPagoC/>
            <Footer/>
        </div>
    )
}

export default MetodosPago