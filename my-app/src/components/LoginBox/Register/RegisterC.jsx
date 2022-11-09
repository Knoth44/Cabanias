import React from 'react'
import "./RegisterC.css"

const RegisterC = () => {
    return (
        <>
            <div className="conteiner-formulario" style={{boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)'}}>
                <h4>Registrate</h4>
                <form id="form" method="get">
                    <div className="form-section1">
                        <div className="form-inputs2">
                            <label for="Name">Nombre </label>
                            <input type="text" name="Name" placeholder="Ingresar Nombre"/>
                        </div>
                        <div className="form-inputs2">
                            <label for="Apellido">Apellido </label>
                            <input type="text" name="Apellido" placeholder="Ingresar Apellido"/>
                        </div>
                    </div>
                    <div className="form-inputs1">
                        <label for="Telefono">Telefono </label>
                        <input type="text" name="Telefono" placeholder="Telefono"/>
                    </div>
                    <div className="form-inputs1">
                        <label for="Email">Email </label>
                        <input type="text" name="Email" placeholder="Email"/>
                    </div>
                    <div className="form-inputs1">
                        <label for="password">Contraseña </label>
                        <input type="text" name="Contraseña" placeholder="Contraseña"/>
                    </div>
                    <div className="form-inputs3">
                        <input type="submit" id="input-form" value="Enviar formulario"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterC