import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import "./Cabanias.css";
import img1 from '../../assets/img/cabania1.png'
import { Link } from 'react-router-dom';

const Cabanias = () => {
  return (
    <Container>
      <Row>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 1 Persona</Card.Title>
            <Card.Text>
              Precio: $4000
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: 'rgb(122, 183, 48)',borderColor: 'transparent' }}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 2 Personas</Card.Title>
            <Card.Text>
              Precio: $5500
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: 'rgb(122, 183, 48)',borderColor: 'transparent' }}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 3 Personas</Card.Title>
            <Card.Text>
              Precio: $6600
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: ' rgb(122, 183, 48) ',borderColor: 'transparent' }}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
      </Row>
      <Row>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 4 Personas</Card.Title>
            <Card.Text>
              Precio: $8000
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: 'rgb(122, 183, 48) ', borderColor: 'transparent' }}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 5 Personas</Card.Title>
            <Card.Text>
              Precio: $10000
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: 'rgb(122, 183, 48) ', borderColor: 'transparent'}}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
        <Col><Card className="cardestilo">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Cabaña 1 - 6 Personas</Card.Title>
            <Card.Text>
              Precio: $11000
            </Card.Text>
            <Button variant="primary" style={{ height: 'auto', backgroundColor: ' rgb(122, 183, 48)', borderColor: 'transparent' }}><Link to={"/metodospago"} style={{ color: "white",textDecoration:'none' }}>Reservar</Link></Button>
          </Card.Body>
        </Card></Col>
      </Row>
    </Container>
  )
}

export default Cabanias