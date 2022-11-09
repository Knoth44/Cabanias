import React, { useState } from 'react';
import "./RegisterC.css";
import Database from '../../../Hooks/Database';

const RegisterC = () => {

    // const { User, setUser, Cabanias } = CallDataBaseProvider();
    const { DB_MongoUserAdd } = Database()
    const [form, setForm] = useState({
        user: {
            nombre: "",
            apellido: "",
            email: "",
            phone: "",
            password: ""
        }
    })

    const { user: { nombre, apellido, email, password, phone }} = form

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            user: {
                ...form.user,
                [name]: value,
            }
        })

    }
    function agree(evt) {
        return evt.some(e => e === "")
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if (!agree([email, nombre, apellido, phone, password])) {
            
            DB_MongoUserAdd(form)
            return;
        }
        alert("error")

    };

    return (
        <>
            <div className="conteiner-formulario" style={{ boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)' }}>
                <h4>Registrate</h4>
                <form id="form" method="get">
                    <div className="form-section1">
                        <div className="form-inputs2">
                            <label htmlFor="nombre">Nombre </label>
                            <input type="text" name="nombre" placeholder="Ingresar Nombre" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="form-inputs2">
                            <label htmlFor="apellido">Apellido </label>
                            <input type="text" name="apellido" placeholder="Ingresar Apellido" onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-inputs1">
                        <label htmlFor="phone">Telefono </label>
                        <input type="text" name="phone" placeholder="Telefono" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-inputs1">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-inputs1">
                        <label htmlFor="password">Contraseña </label>
                        <input type="text" name="password" placeholder="Email" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-inputs3">
                        <input type="submit" id="input-form" onClick={(e) => onSubmit(e)} value="Enviar formulario" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterC