import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({ prise, heading, imgsrc }) => {
    return (
        <>
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={imgsrc} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                            {heading}
                        </h5>
                        <p>
                            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus
                            sed eaque
                        </p>
                        <div className="options">
                            <h6>
                                ${prise}
                            </h6>
                            <Link to='#'>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuCard;