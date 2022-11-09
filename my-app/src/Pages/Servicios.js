import React from "react"
import Footer from "../components/Footer/Footer"
import ItemConteiner from "../components/ItemConteiner/ItemConteiner"
import NavbarComponent from "../components/Navbar/NavbarComponent"
import "./main.css"

function EditCabanias() {
    return (
        <div className="main-content">
            <NavbarComponent />
                <ItemConteiner/>
            <Footer />
        </div>
    )
}

export default EditCabanias