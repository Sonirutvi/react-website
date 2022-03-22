import React from "react";
import aboutImg from "../img/pizza.jpg"

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>WELCOME TO MAESTRO PIZINNI</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua
                        </p>
                        <button className="about__btn btn btn-smart">
                            READ MORE
                        </button>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src={aboutImg} alt="pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About