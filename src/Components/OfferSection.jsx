import React from 'react';
import { Link } from 'react-router-dom';

const OfferSection = () => {
    return (
        <>
            <section className="offer_section layout_padding-bottom wow fadeInUp">
                <div className="offer_container">
                    <div className="container ">
                        <div className="row">


                            <div className="col-md-6  ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="images/o1.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Tasty Thursdays
                                        </h5>
                                        <h6>
                                            <span>20%</span> Off
                                        </h6>
                                        <Link to='#'>
                                            Order Now
                                            <i className="fa-solid fa-cart-shopping"></i>

                                        </Link>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-6  ">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src="images/o2.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Pizza Days
                                        </h5>
                                        <h6>
                                            <span>15%</span> Off
                                        </h6>
                                        <Link to='#'>
                                            Order Now
                                            <i className="fa-solid fa-cart-shopping"></i>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferSection;