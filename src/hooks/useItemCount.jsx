import {useState} from 'react'

const useItemCount = (stock, onAdd) => {
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
    
    return{
        add, substract, reset, count
    }
}

export default useItemCount