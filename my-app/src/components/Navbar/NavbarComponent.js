import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import ContactNavbar from './ContactNavbar/ContactNavbar';
import { CallDataBaseProvider } from '../../Context/Context';
import Button from 'react-bootstrap/esm/Button';

const NavbarComponent = () => {
    const { setUser, User } = CallDataBaseProvider();
    return (
        <>
            <div className='d-flex justify-content-center'>
                <ContactNavbar />
            </div>
            <div className='d-flex justify-content-center nav-center'>
                <Navbar className='navbar-i' expand="lg">
                    <Container>
                        <Navbar.Brand className="w-50" > <Link to={'/'} style={{ textDecoration: 'none', color: '#212121 ' }}> <h1 style={{ fontSize: "600", fontWeight: "700" }}>CABAÑAS DEL <span style={{ color: "#7AB730 " }}>CERRO </span></h1> </Link>  </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto justify-content-around">
                                <Link to={"/"} className="nav-link nav-style__hover" style={{ fontSize: "1em", fontWeight: "600" }}>Home</Link>
                                <Link to={"/servicios"} className="nav-link nav-style__hover" style={{ fontSize: "1em", fontWeight: "600" }}>Servicios</Link>
                                {
                                    User.username === undefined ?
                                        <div><Link to={"/create"} className="nav-link" style={{ fontSize: "1em", fontWeight: "600", borderRadius: '20px', backgroundColor: "#7AB730", width: '150px', textAlign: 'center' }}>Iniciar sesion</Link></div>
                                        : <div style={{height:'auto', paddingTop:'10px'}}> <h6 style={{letterSpacing:'0px'}}> Hola ! {User.username.nombre}</h6></div>
                                }
                            </Nav>
                            {User.username && <Button onClick={() => setUser({})} style={{ width: '25%', backgroundColor: '#7AB730', borderColor: 'transparent', heigth: 'auto', marginLeft: '10px' }} > <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}> Desloguear </Link></Button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div >
        </>

    )
}

export default NavbarComponent