import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RegisterC from './Register/RegisterC';
import "./LoginBox.css";
import Database from '../../Hooks/Database';
import { CallDataBaseProvider } from '../../Context/Context';

const LoginBox = () => {
    const { setError, setMsg } = CallDataBaseProvider();
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
        setError(true)
        setMsg("Llenar los campos!")

    };
    return (
        <div className='d-flex w-100 justify-content-center'>
            <Form className='bg-light w-50 form-login h-75 justify-content-around align-items-center' style={{ boxShadow: '0 1rem 3rem rgba(0, 0, 0, 0.175)' }}>
                <div className='title'>
                    <h4>Iniciar sesion</h4>
                </div>
                <div className="form-inputs1" style={{ width: '100%', marginBottom: '45px' }}>
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                </div>
                <div className="form-section1" >
                    <div className="form-inputs1" style={{ width: '100%', marginBottom: '45px' }}>
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
                    <Button className='btn-form' style={{
                        paddingRight: '10px',
                        marginLeft: '60px',
                        width: '30%',
                        height: 'max-content'
                    }} onClick={() => setRegister(!Register)}> Crear cuenta nueva</Button>
                </div>
            </Form>
            {Register && <RegisterC />}

        </div>
    )
}

export default LoginBox