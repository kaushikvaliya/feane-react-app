import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlierHome from '../Components/Slider_Home_text';

const HomeSlider = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

        appendDots: (dots) => (
            <div>
                <ul className="custom-dots">{dots}</ul>
            </div>
        ),
    };
    return (
        <>
            <div className="hero_area" >
                <div className="bg-box">
                    <img src="images/hero-bg.jpg" alt="" />
                </div>
                <section className="slider_section">
                    <div className="container">
                        <div className="carousel slide  customCarousel1" >
                            <Slider {...settings}>
                                <SlierHome />
                                <SlierHome />
                                <SlierHome />
                            </Slider>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomeSlider;