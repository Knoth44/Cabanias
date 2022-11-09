import React, { useState } from 'react'
import { CallDataBaseProvider } from '../../../Context/Context';
import "./RegisterC.css"

const RegisterC = () => {

    const { User, setUser, Cabanias } = CallDataBaseProvider();
    console.log(User, setUser, Cabanias)
    const [form, setForm] = useState({
        user: {
            nombre: "",
            apellido: "",
            phone: "",
            email: "",
            contraseña: "",
        }
    })

    // const { user: { nombre, phone, email, apellido }, } = form

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm({
            ...form,
            user: {
                ...form.user,
                [name]: value,
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    };
    return (
        <>
            <div className="conteiner-formulario" style={{ boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)' }}>
                <h4>Registrate</h4>
                <form id="form" method="get">
                    <div className="form-section1">
                        <div className="form-inputs2">
                            <label for="nombre">Nombre </label>
                            <input type="text" name="nombre" placeholder="Ingresar Nombre" onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="form-inputs2">
                            <label for="apellido">Apellido </label>
                            <input type="text" name="apellido" placeholder="Ingresar Apellido" onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-inputs1">
                        <label for="phone">Telefono </label>
                        <input type="text" name="phone" placeholder="Telefono" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-inputs1">
                        <label for="email">Email </label>
                        <input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-inputs1">
                        <label for="contraseña">Contraseña </label>
                        <input type="text" name="contraseña" placeholder="Contraseña" onChange={(e) => handleChange(e)} />
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