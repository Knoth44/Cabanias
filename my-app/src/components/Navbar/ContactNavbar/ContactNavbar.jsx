import React from 'react'
import { GrMail } from 'react-icons/gr';
import {BsFillTelephoneFill, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import "./ContactNavbar.css"
const ContactNavbar = () => {
    return (
        <>
            <div className='contact-nos'>
                <div className='contact-nos__mail'> <GrMail/> racarmona14@gmail.com | <BsFillTelephoneFill/> +54 93804771771</div>
               <div className='contact-nos__redes'> < FaFacebookF  className='animation'/> <BsInstagram className='animation'/></div>
            </div>
        </>
    )
}

export default ContactNavbar