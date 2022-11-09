import React from 'react'
import "./Booking.css"

const Booking = () => {

    return (
        <div className='booking'>
            <div className='booking__box'>
                <div className='booking__box_inputs'>
                    <select >
                        <option selected>Personas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="1">4</option>
                        <option value="2">5</option>
                        <option value="3">6</option>
                    </select>
                </div>
                <div className='booking__box_inputs'>
                    <input type="date" className="form-control  datetimepicker-input" placeholder="Fecha de entrada" data-target="#date1" data-toggle="datetimepicker" />
                </div>
                <div className='booking__box_inputs'>
                    <input type="date" className="form-control datetimepicker-input" placeholder="Fecha de salida" data-target="#date2" data-toggle="datetimepicker" />
                </div>
                <div className='booking__box_inputs'>
                    <select>
                        <option selected>Medio de pago</option>
                        <option value="1">Efectivo</option>
                        <option value="3">Tarjeta de credito/debito</option>
                    </select>
                </div>
                <div className='booking__box_inputs'>
                    <button className="btn btn-primary btn-block" type="submit">Consultar</button>
                </div>
            </div>

        </div>
    )
}

export default Booking