import React from 'react'
import img4 from "../../assets/img/im4.png";
import img3 from "../../assets/img/im3.png";
import img5 from "../../assets/img/im5.png";
import { Link } from 'react-router-dom';
import "../AboutStart/Aboutstart.css"

const AboutStart = () => {
    return (
        <div className='contenedor-about'>
            <div classNameName="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: '500px' }}>
                            <div className="position-relative" style={{
                                width: '540px',
                                height: '782px'
                            }}>
                                <img className="position-absolute w-100 h-100" src={img4} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5" style={{
                                right: '150px',
                                position: 'relative'
                            }}>
                                <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Sobre nosotros</h6>
                                <h1 className="mb-3">Servicios Servicios Servicios</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src={img3} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img src={img5} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <Link href={'/'} className="btn-link">Reservar Ahora</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStart