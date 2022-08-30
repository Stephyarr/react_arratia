import React from 'react'
import "./ItemCount.css"
import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    function add() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function substract() {
        if(count) {
            setCount(count - 1)
        }
    }

    function reset() {
        setCount(0)
    }
    
    return (
        <div className='card'>
            
            <div className="productos">
                <img src="./assets/imag/buzocan1.jpg" alt="" />
                <h3>Buzo Name</h3>
                <p>Stock: {stock}</p>
                <p>Cantidad: {count}</p>

                <div className='button'>
                    <button className='btn' onClick={substract}> - </button>
                    <button className='btn' onClick={reset}> Reset </button>
                    <button className='btn' onClick={add}> + </button>   
                     
                </div>
                <div className='agregar'>
                    <button onClick={() => onAdd(count)}>Agregar Carrito</button>
                </div>
                
            </div>

            {/* <div className="productos">
                <img src="./assets/imag/buzocan1.jpg" alt="" />
                <h3>Buzo Name</h3>
                <p>Stock: </p>
                <p>Cantidad: {count}</p>

                <div className='button'>
                    <button className='btn'> - </button>
                    <button className='btn'> Reset </button>
                    <button className='btn'> + </button>    
                </div>

                <button className='agregar'>Agregar Carrito</button>
            </div> */}

        </div>
    );
}

export default ItemCount
