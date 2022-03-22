import React from "react";
import img1 from "../img/pizza1.png"
import img2 from "../img/pizza2.png"
import img3 from "../img/pizza3.png"

const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={img1} alt="pizza" />
                            </div>
                            <h1 div className="price__heading">
                                Pizza Margeritta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </p>
                            <p className="price_rs">$50.00</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={img2} alt="pizza" />
                            </div>
                            <h1 div className="price__heading">
                                Pizza Margeritta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </p>
                            <p className="price_rs">$50.00</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={img3} alt="pizza" />
                            </div>
                            <h1 div className="price__heading">
                                Pizza Margeritta
                            </h1>
                            <p className="price__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua
                            </p>
                            <p className="price_rs">$50.00</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Prices