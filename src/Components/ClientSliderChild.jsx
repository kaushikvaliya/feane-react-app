import React from 'react';



const ClientSliderChild = ({ imgsrc, name }) => {
    return (
        <>
            <div className="item">
                <div className="box">
                    <div className="detail-box">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>
                            {name}
                        </h6>
                        <p>
                            magna aliqua
                        </p>
                    </div>
                    <div className="img-box">
                        <img src={imgsrc} alt="" className="box-img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientSliderChild;