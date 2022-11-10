import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./MetodosPago.css";
import { Link } from 'react-router-dom';
// import mercadopago from 'mercadopago';

const MetodosPagoC = () => {
  const [Select, setSelect] = useState("metodospago")

  // const functMercado = () => {
  //   fetch('http://localhost:3000/generar', (req, res) => {

  //     let preference = {
  //       back_urls: {
  //         success: 'http://localhost:3003/success'
  //       },
  //       items: [

  //         {
  //           id: 123,
  //           title: 'Cabana 1 - 1 Persona',
  //           unit_price: 4000,
  //           currency_id: "ARS",
  //           quantity: 1,
  //         }
  //       ],
  //     };

  //     mercadopago.preferences
  //       .create(preference)
  //       .then(function (response) {
  //         console.log(response.body.init_point);
  //         res.send(`<a href="${response.body.init_point}">IR A PAGAR</a>`);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });
  // }

  return (
    <Container fluid className='estilo'>
      <Form className='select'>
        <Form.Select size="lg" onChange={(e) => setSelect(e.target.value.toLowerCase())}>
          <option>Mercadopago</option>
          <option>Transferencia</option>
        </Form.Select>
        <div className='contenedorBtn'>
          <Button variant="primary" className='button'> <Link to={`/${Select}`}>  Continuar  </Link></Button>{' '}
          <Button variant="secondary" className='button'> <Link to={'/'}> Cancelar </Link></Button>{' '}
        </div>
      </Form>
    </Container>
  )
}

export default MetodosPagoC