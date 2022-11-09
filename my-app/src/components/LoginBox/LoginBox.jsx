import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RegisterC from './Register/RegisterC';
import "./LoginBox.css";

const LoginBox = () => {

    const [Register, setRegister] = useState(false)

    return (
        <div className='d-flex w-100 justify-content-center'>
            <Form className='bg-light w-50 form-login h-75 justify-content-around align-items-center' style={{ boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)' }}>
                <div className='title'>
                    <h4>Iniciar sesion</h4>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="email" placeholder="Usuario por mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar contraseña" />
                </Form.Group>
                <Button type="submit" onSubmit={(e) => console.log(e)} className='btn-form' style={{
                    textAlign: 'center',
                    width: '20%',
                    height: 'max-content',
                    marginLeft: '20%'
                }}>
                    Ingresar
                </Button>
                <Button className='btn-form' style={{
                    paddingRight: '10px',
                    marginLeft: '10px',
                    width: '30%',
                    height: 'max-content'
                }} onClick={() => setRegister(!Register)}> Desea registrarse ?</Button>
            </Form>
            {Register && <RegisterC />}

        </div>
    )
}

export default LoginBox