import React from "react";
import abouttImg from "../img/pizza.jpg";
const Menu = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={abouttImg} alt="pizza" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICAGO THIN CRUST</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua
                        </p>
                        <button className="about__btn btn btn-smart">
                            VIEW MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu