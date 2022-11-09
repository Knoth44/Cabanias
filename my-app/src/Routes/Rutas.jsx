import React from 'react'
import CabaniasList from "../Pages/Cabanias"
import EditCabanias from "../Pages/Servicios"
import CreateCabanias from "../Pages/Createcabanias"
import CreateUser from "../Pages/CreateUserCabanias"
import Servicios from "../Pages/Servicios"
import { Routes, Route, BrowserRouter } from "react-router-dom"

const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CabaniasList />} />
                    <Route path="/servicios" element={<Servicios/>} />
                    <Route path="/edit/:id" element={<EditCabanias />} />
                    <Route path="/create" element={<CreateCabanias />} />
                    <Route path="/user" element={<CreateUser />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas