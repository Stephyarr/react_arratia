import React from "react";
import { BsFillCartFill } from 'react-icons/bs';
import "./NavBar.css"



const NavBar = () => {
    return (
        <div className="Navbar">
            <h1>Pet Shop</h1>
            <div className="nav-items">
                <a href="/inicio">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contact">Contacto</a>
            </div>
            <BsFillCartFill/>
        </div>
    )
}

export default NavBar