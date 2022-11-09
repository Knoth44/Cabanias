import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RegisterC from './Register/RegisterC';
import "./LoginBox.css";
import Database from '../../Hooks/Database';

const LoginBox = () => {

    const { DB_MongoUserFind } = Database()
    const [Register, setRegister] = useState(false)
    const [findUser, setFindUser] = useState({
        user: {
            email: "",
            password: ""
        }
    })

    const { user: { email, password } } = findUser

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFindUser({
            user: {
                ...findUser.user,
                [name]: value,
            }
        })
    }

    function agree(evt) {
        return evt.some(e => e === "")
    }

    const onSubmit = (e) => {
        e.preventDefault();
       
        if (!agree([email, password])) {
            DB_MongoUserFind(findUser.user);
            return;
        }
        alert("error")

    };
    return (
        <div className='d-flex w-100 justify-content-center'>
            <Form className='bg-light w-50 form-login h-75 justify-content-around align-items-center' style={{ boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)' }}>
                <div className='title'>
                    <h4>Iniciar sesion</h4>
                </div>
                <div className="form-inputs1">
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-section1">
                    <div className="form-inputs1">
                        <label htmlFor="password">Contraseña </label>
                        <input type="password" name="password" placeholder="Contraseña" onChange={(e) => handleChange(e)} />
                    </div>
                </div>
                <div className="form-inputs3">
                    <Button type="submit" onClick={(e) => onSubmit(e)} className='btn-form' style={{
                        textAlign: 'center',
                        width: '20%',
                        height: 'max-content',
                        marginLeft: '20%'
                    }}>
                        Ingresar
                    </Button>
                </div>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label name="usuario">Usuario</Form.Label>
                    <Form.Control type="name" placeholder="Usuario por mail" onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label name="contrasenia">Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar contraseña" />
                </Form.Group> */}

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