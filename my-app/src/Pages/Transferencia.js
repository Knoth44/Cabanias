import React from "react"
import Footer from "../components/Footer/Footer"
import NavbarComponent from "../components/Navbar/NavbarComponent"
import TrasnferenciaC from "../components/MetodosPago/Transferencia/Transferencia"

function Transferencia(){
    return (
        <div className="main-content">
            <NavbarComponent />
            <TrasnferenciaC/>
            <Footer/>
        </div>
    )
}

export default Transferencia