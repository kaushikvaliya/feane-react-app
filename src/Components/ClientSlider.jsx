import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientSliderChild from '../Components/ClientSliderChild';
const ClientSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const prevArrow = document.querySelector('.prev_clients');
        const nextArrow = document.querySelector('.next_clients');

        prevArrow.addEventListener('click', () => {
            sliderRef.current.slickPrev();
        });

        nextArrow.addEventListener('click', () => {
            sliderRef.current.slickNext();
        });

        return () => {
            prevArrow.removeEventListener('click', () => {
                sliderRef.current.slickPrev();
            });

            nextArrow.removeEventListener('click', () => {
                sliderRef.current.slickNext();
            });
        };
    }, []);

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        dots: false,
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
    };

    return (
        <>
            <section className="client_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>
                            What Says Our Customers
                        </h2>
                    </div>
                    <div className="carousel-wrap row ">
                        <div className="owl-carousel client_owl-carousel">
                            <Slider {...settings} ref={sliderRef}>
                                <ClientSliderChild imgsrc="images/client1.jpg" name="Mike Hamell" />
                                <ClientSliderChild imgsrc="images/client2.jpg" name="Moana Michell" />
                                <ClientSliderChild imgsrc="images/client1.jpg" name="Mike Hamell" />
                                <ClientSliderChild imgsrc="images/client2.jpg" name="Moana Michell" />
                            </Slider>
                            <div className="text-center mt-5">
                                <button className="prev_clients"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                                <button className="next_clients"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientSlider;