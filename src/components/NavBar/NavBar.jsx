import React from "react";
import "./NavBar.css"
import { CgShoppingCart } from 'react-icons/cg';

const NavBar = () => {
    return (
        <div className="Navbar">
            <h1>Pet Shop</h1>
            <div className="nav-items">
                <a href="/inicio">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contact">Contacto</a>
            
            </div>

            <div>
                <CgShoppingCart className="icon"/>
            </div> 

        </div>
    )
}

export default NavBar