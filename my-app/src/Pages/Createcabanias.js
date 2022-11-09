import React from "react"
import Footer from "../components/Footer/Footer"
import LoginBox from "../components/LoginBox/LoginBox"
import { CallDataBaseProvider } from "../Context/Context"
import CabaniasPrice from "./CabaniasPrice"
import "./main.css"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import CabaniasProductos from "./CabaniasProductos"

function CreateCabanias() {
    const { User } = CallDataBaseProvider();

    return (
        <div>
            {!User._id >= 1 ?
                <div>
                    <div className="position-absolute top-0 " style={{ width: '10px', color: 'black',left:'100px', height: '100px', borderRadius: '10px' }}>
                        <Link to={'/'}> <AiOutlineArrowLeft></AiOutlineArrowLeft></Link>
                    </div>
                    <div className="main-login" style={{ width: '100%', heigth: '100vh', display: 'flex', justifyContent: 'center' }}>
                        <LoginBox />
                    </div>
                    <Footer />
                </div>

                :
                <CabaniasProductos />
            }
        </div>
    )
}

export default CreateCabanias