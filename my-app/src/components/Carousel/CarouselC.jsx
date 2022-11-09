import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/img/im1.jpg';
import logo2 from '../../assets/img/im2.jpg';
import "./CarouselC.css";
import { Link } from 'react-router-dom';

const CarouselC = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={logo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>EXCURSIONES Y VIAJES</h4>
                        <h1>Descubramos el departamento juntos</h1>
                        <div className='d-flex justify-content-center cursor-pointer'>
                            <Link className='buttonreserva' to={'/create'}> Reservar Ahora</Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>EXCURSIONES Y VIAJES</h4>
                        <h1>Descubre lugares increíbles con nosotros</h1>
                        <div className='d-flex justify-content-center cursor-pointer h-100 btn-reserva'>
                            <Link className='buttonreserva' to={'/create'}> Reservar Ahora</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselC