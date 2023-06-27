import React from 'react';
import { Link } from 'react-router-dom';

const FooterCompo = () => {
    return (
        <>


            <footer className="footer_section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Contact Us
                                </h4>
                                <div className="contact_link_box">
                                    <Link to="#">
                                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                        <span>
                                            Location
                                        </span>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 footer-col">
                            <div className="footer_detail">
                                <Link to="#" className="footer-logo">
                                    Feane
                                </Link>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
                                    words, combined with
                                </p>
                                <div className="footer_social">
                                    <Link to="#">
                                        <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-pinterest" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 footer-col">
                            <h4>
                                Opening Hours
                            </h4>
                            <p>
                                Everyday
                            </p>
                            <p>
                                10.00 Am -10.00 Pm
                            </p>
                        </div>
                    </div>

                    <div className="footer-info">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <Link to='#'>Free Html Templates</Link><br /><br />
                            &copy; <span id="displayYear"></span> Distributed By
                            <Link to='#' target="_blank" rel="noopener noreferrer">ThemeWagon</Link>
                        </p>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default FooterCompo;