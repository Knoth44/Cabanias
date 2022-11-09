import React from "react"
import Footer from "../components/Footer/Footer"
import LoginBox from "../components/LoginBox/LoginBox"
import "./main.css"

function CreateCabanias() {
    return (
        <div>
            <div className="main-login" style={{ width: '100%', heigth: '100vh',display:'flex', justifyContent:'center' }}>
                <LoginBox />
            </div>
            <Footer />
        </div>
    )
}

export default CreateCabanias