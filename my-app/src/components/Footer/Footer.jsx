import React from 'react'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IoLocationSharp } from "react-icons/io5"
import "./Footer.css"

const Footer = () => {

    return (
        <div className='footer'>
            <div className='w-50 '>
                <h1 style={{ fontSize: "600", fontWeight: "700" }}>CABAÑAS DEL <span style={{ color: "#7AB730 " }}>CERRO </span></h1>
                <div className='w-50'>
                    <p className='footer-p'>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                </div>
                <h6>SIGUENOS EN</h6>
                <div className='footer-siguenos'>

                    <div className='d-flex justify-content-evenly '>
                        <div className="footer-icons"> <FaFacebookF /> </div>
                        <div className="footer-icons"> <BsInstagram /></div>
                    </div>

                </div>
            </div>
            <div className='w-25 footer-p'>
                <h5 style={{ color: "white" }}>CONTACTANOS</h5>
                <p> <IoLocationSharp /><span>Malanzan, La Rioja</span></p>
                <p> <BsFillTelephoneFill /> <span>+54 9 3804771771</span> </p>
                <p> <GrMail /> <span>racarmona14@gmail.com</span></p>
            </div>
        </div>
    )
}

export default Footer