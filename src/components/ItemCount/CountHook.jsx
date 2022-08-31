import React from 'react'
import useItemCount from '../../hooks/useItemCount'

const CountHook = ({stock, onAdd}) => {
    const {add, substract, reset, count} = useItemCount(stock)

  return (
    <div>
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
    </div>
  )
}

export default CountHook