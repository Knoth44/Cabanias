import React from 'react'
import img1 from "../../assets/img/im1.jpg";
import "./ItemConteiner.css"

const ItemConteiner = () => {

    return (
        <>
            <div className=' d-flex justify-content-center flex-column cards'>
                <div className='cardss'>
                    <div className='position-relative ' style={{ right: '40px',bottom:'20px',width: '21em' }}>
                        <img src={img1} alt="" width={'400px'} />
                    </div>
                    <div style={{
                        textAlign: 'end',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    }}>
                        <h2 style={{ letterSpacing: '0.5rem' }}>CABAÑA</h2>
                        <div style={{ textAlign: 'start' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quis, cum asperiores blanditiis nulla sed impedit autem magni quos fuga corporis nostrum dolor perferendis, facere dolorum. Possimus perspiciatis illum quia!
                        </div>
                        <button style={{ width: '25%', height: 'auto' }}>Ver mas</button>
                    </div>

                </div>
                <div className='cardss2'>
                    <div style={{
                        textAlign: 'end ',
                        display: ' flex',
                        
                    }}>
                        <div style={{
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                        }}>
                            <h2 style={{ letterSpacing: '0.5rem' }}>CABAÑA</h2>
                            <div style={{ textAlign: 'start' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quis, cum asperiores blanditiis nulla sed impedit autem magni quos fuga corporis nostrum dolor perferendis, facere dolorum. Possimus perspiciatis illum quia!
                            </div>

                            <button style={{ width: '25%', height: 'auto' }}>Ver mas</button>
                        </div>

                        <div >
                            <img src={img1} alt="" width={'400px'} className='position-relative ' style={{ right: '-40px',bottom:'-20px',width: '21em' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemConteiner