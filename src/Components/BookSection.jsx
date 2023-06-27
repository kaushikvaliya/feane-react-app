import React, { useEffect } from 'react';
import WOW from 'wowjs';

const BookSection = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();

        return () => {
            const wowElements = document.querySelectorAll('.wow');
            wowElements.forEach((element) => {
                element.classList.remove('wow', 'animated'); // Remove the WOW.js classes
            });
        };
    }, []);

    const FormData = (e) => {
        e.preventDefault();

    }



    return (
        <>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Book A Table
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="form_container">
                                <form action="" onSubmit={FormData}>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <select className="form-control nice-select wide" >
                                            <option readOnly>
                                                How many persons?
                                            </option>
                                            <option>
                                                2
                                            </option>
                                            <option>
                                                3
                                            </option>
                                            <option>
                                                4
                                            </option>
                                            <option>
                                                5
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            Book Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="0.1s">
                            <div className="map_container ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249822.21961233!2d82.75252935!3d21.068622799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1687303226805!5m2!1sen!2sin" width="600" style={{ border: "0" }} height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookSection;