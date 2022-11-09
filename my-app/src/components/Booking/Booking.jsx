import React from 'react'
import "./Booking.css"
const Booking = () => {
    return (
        // <div >
        //     <div className="container-fluid booking">
        //         <div className="container">
        //             <div className="bg-light shadow">
        //                 <div className="row align-items-center">
        //                     <div className="col-md-10">
        //                         <div className="row">
        //                             <div className="col-md-3" style={{width:'35%'}}>
        //                                 <div className="mb-3 mb-md-0" style={{width:'100%'}}>

        //                                 </div>
        //                             </div>
        //                             <div className="col-md-3">
        //                                 <div className="mb-3 mb-md-0">
        //                                     <div className="date" id="date1" data-target-input="nearest">
        //                                         <input type="text" className="form-control datetimepicker-input" placeholder="Fecha de entrada" data-target="#date1" data-toggle="datetimepicker" />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-3">
        //                                 <div className="mb-3 mb-md-0">
        //                                     <div className="date" id="date2" data-target-input="nearest">
        //                                         <input type="text" className="form-control datetimepicker-input" placeholder="Fecha de salida" data-target="#date2" data-toggle="datetimepicker" />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-md-3">
        //                                 <div className="mb-3 mb-md-0">
        //                                     <select className="custom-select px-4" style={{ height: '47px' }}>
        //                                         <option selected>Medio de pago</option>
        //                                         <option value="1">Efectivo</option>
        //                                         <option value="2">Transferencia</option>
        //                                         <option value="3">Tarjeta de credito/debito</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-md-2">
        //                         <button className="btn btn-primary btn-block" type="submit" style={{ height: "47px", marginTop: "-2px" }}>Consultar</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>

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
                    <input type="date" class="form-control  datetimepicker-input" placeholder="Fecha de entrada" data-target="#date1" data-toggle="datetimepicker" />
                </div>
                <div className='booking__box_inputs'>
                    <input type="date" class="form-control datetimepicker-input" placeholder="Fecha de salida" data-target="#date2" data-toggle="datetimepicker" />
                </div>
                <div className='booking__box_inputs'>
                    <select>
                        <option selected>Medio de pago</option>
                        <option value="1">Efectivo</option>
                        <option value="3">Tarjeta de credito/debito</option>
                    </select>
                </div>
                <div className='booking__box_inputs'>
                    <button class="btn btn-primary btn-block" type="submit">Consultar</button>
                </div>
            </div>

        </div>
    )
}

export default Booking