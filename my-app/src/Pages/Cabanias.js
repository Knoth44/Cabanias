import React from "react"
import Footer from "../components/Footer/Footer"
import NavbarComponent from "../components/Navbar/NavbarComponent"
import "./main.css"
import CarouselC from "../components/Carousel/CarouselC"
import Booking from "../components/Booking/Booking"
import AboutStart from "../components/AboutStart/AboutStart"

function CabaniasList() {


    return (
        <div className="main-content">
            <NavbarComponent />
            <CarouselC />
            <Booking /> 
            <AboutStart/>
            <Footer />
        </div>
    )
}

export default CabaniasList