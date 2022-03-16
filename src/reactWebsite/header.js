import React from "react";
import Navbar from "./navbar";

const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner__content">
                <div className="container">
                    <div className="banner__text">
                        <h3>Pizza Delivery</h3>
                        <h1>MAESTRO PIZINNI</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua
                        </p>
                        <br /><br />
                        <a href="" className="btn btn-smart">DELIVERY NOW</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 