import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./MetodosPago.css";
import { Link } from 'react-router-dom';
import DatabaseMerc from '../../Hooks/Mercadopago';

const MetodosPagoC = () => {

  const [Select, setSelect] = useState("metodospago")
  const { getTicketPrice, Url } = DatabaseMerc()

  return (
    <>
      <Container fluid className='estilo'>
        <Form className='select'>
          <Form.Select size="lg" onChange={(e) => setSelect(e.target.value.toLowerCase())}>
            <option>Mercadopago</option>
            <option>Transferencia</option>
          </Form.Select>
          <div className='contenedorBtn'>
            <Button onClick={() => getTicketPrice()} style={{ width: '100px', height: 'auto', backgroundColor: '#527a20', borderColor: 'transparent' }} className='button'> <Link style={{ color: 'white', textDecoration: 'none' }}>  Continuar  </Link></Button>{' '}   {Url.length >= 1 && <a href={`${Url}`} style={{ color: 'white', textDecoration: 'none' }} ><Button style={{ width: '100px', height: 'auto', backgroundColor: '#527a20', marginTop: '15px', marginRight: '10px', borderColor: 'transparent' }}> Ir </Button></a>}
            <Button style={{ width: '100px', height: 'auto', backgroundColor: 'grey', borderColor: 'transparent' }} className='button'> <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}> Cancelar </Link></Button>{' '}
          </div>
        </Form>
      </Container >

    </>
  )
}

export default MetodosPagoC