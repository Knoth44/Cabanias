import React from "react"
import Footer from "../components/Footer/Footer"
import NavbarComponent from "../components/Navbar/NavbarComponent"
import "./main.css"

function CreateUser() {
    
    return (
        <div className="main-content">
            <NavbarComponent />
            <p>Create user</p>
            <Footer />
        </div>
    )
}

export default CreateUser