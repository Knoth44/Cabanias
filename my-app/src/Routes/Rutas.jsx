import React from 'react'
import CabaniasList from "../Pages/Cabanias"
import EditCabanias from "../Pages/Servicios"
import CreateCabanias from "../Pages/Createcabanias"
import Servicios from "../Pages/Servicios"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import CabaniasPrice from '../Pages/CabaniasPrice'
import CabaniasProductos from '../Pages/CabaniasProductos'
import MetodosPago from '../Pages/MetodosPago'
import Transferencias from "../Pages/Transferencia"
const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CabaniasList />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/edit/:id" element={<EditCabanias />} />
                    <Route path="/create" element={<CreateCabanias />} />
                    <Route path="/cabaniasprice" element={<CabaniasPrice></CabaniasPrice>}></Route>
                    <Route path="/cabanias" element={<CabaniasProductos />} />
                    <Route path="/metodospago" element={<MetodosPago />} />
                    <Route path="/transferencia" element={<Transferencias />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas