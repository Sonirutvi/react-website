import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__text">
                <div className="logo"><img src="/src/img/logo.png" alt="logo" /></div>
                <ul className="navbar__ul">
                    <li><a href="">HOME</a></li>
                    <li><a href="">MENU</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SHOP</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar