import React from "react"
import Cabanias from "../components/Cabanias/Cabanias"
import Footer from "../components/Footer/Footer"
import NavbarComponent from "../components/Navbar/NavbarComponent"

function CabaniasProductos(){
    return (
        <div className="main-content">
            <NavbarComponent />
            <Cabanias/>
            <Footer/>
        </div>
    )

}

export default CabaniasProductos