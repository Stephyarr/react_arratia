import React from 'react'
import "./ItemCount.css"

const ItemCount = () => {
    
    return (
        <div className='card'>
            
            <div className="productos">
                <img src="./assets/imag/buzocan1.jpg" alt="" />
                <h3>Buzo Name</h3>
                <p>Stock: </p>
                <p>Cantidad: </p>

                <div className='button'>
                    <button className='btn'> - </button>
                    <button className='btn'> Reset </button>
                    <button className='btn'> + </button>    
                </div>
            </div>

            <div className="productos">
                <img src="./assets/imag/buzocan1.jpg" alt="" />
                <h3>Buzo Name</h3>
                <p>Stock: </p>
                <p>Cantidad: </p>

                <div className='button'>
                    <button className='btn'> - </button>
                    <button className='btn'> Reset </button>
                    <button className='btn'> + </button>    
                </div>
            </div>

        </div>
    );
}

export default ItemCount
