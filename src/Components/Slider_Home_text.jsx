import React from 'react';
// import '../index.css';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam
                            quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos
                            nihil ducimus libero ipsam.
                        </p>
                        <div className="btn-box">
                            <Link to="#" className="btn1">
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;