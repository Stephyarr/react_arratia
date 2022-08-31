import React from 'react'
import CountHook from '../ItemCount/CountHook'
import ItemCount from '../ItemCount/ItemCount'


const ItemListContainer = ({subtitle}) => {
    function onAdd(count) {
        console.log(`Selecciono ${count}`)
    }
    return(
        <>
            <h2> {subtitle} </h2>
            <ItemCount stock={10} onAdd={onAdd} />
            <CountHook stock={8} onAdd={onAdd}/>
        </>
        

    )
}

export default ItemListContainer