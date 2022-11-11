import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Transferencia.css";
import { CallDataBaseProvider } from '../../../Context/Context';


const TransferenciaC = () => {
    const [File, setFile] = useState("")
    const { setError, setMsg } = CallDataBaseProvider();
    const confirmFile = (e) => {
        if (e === "") {
            setError(true)
            setMsg("Seleccionar archivo")
        } 
    }
    return (
        <Container fluid className='estilo'>
            <Form>
                <div>
                    <h1>
                        Transferencias
                    </h1>
                    <h2>TITULAR DE  LAS CUENTAS: ROLANDO ABEL CARMONA</h2>
                    <h3>BANCO RIOJA</h3>
                    <p>
                        <b>CAJA DE AHORRO:</b> N° 0000410002119845
                        <br />
                        <b>CBU:</b>  3090000202004121198457
                        <br />
                        <b>ALIAS:</b>  LARGO.SIGLO.SARTEN
                    </p>
                    <h3>MERCADO PAGO</h3>
                    <p>
                        Rolando Abel Carmona
                        <br />
                        <b>CVU:</b> 0000003100060741266802
                        <br />
                        <b>ALIAS:</b> copas.combo.amago.mp
                        <br />
                        <b>CUIT/CUIL:</b> 20164897711
                    </p>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Adjuntar comprobante</Form.Label>
                        <Form.Control type="file" onChange={(e) => setFile(e.target.value)} />
                    </Form.Group>
                </div>
                <div className='contenedorBtn'>
                    <Button variant="primary" className='button' onClick={() => confirmFile(File)}> Continuar </Button>{' '}
                    <Button variant="secondary" className='button'> Cancelar</Button>{' '}
                </div>
            </Form>
        </Container>
    )
}

export default TransferenciaC