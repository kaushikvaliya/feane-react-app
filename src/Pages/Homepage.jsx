import React, { useEffect } from 'react';
// import HeaderComponent from '../Commoncomponents/HeaderComponent';
import AboutCom from '../Components/About_Com';
import OfferSection from '../Components/OfferSection';
import MenuSection from '../Components/MenuSection.jsx';
import BookSection from '../Components/BookSection';
import ClientSlider from '../Components/ClientSlider';
import HomeSlider from '../Components/HomeSlider';



const Homepage = () => {



    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);



    return (
        <>
            <HomeSlider />
            <OfferSection />
            <MenuSection />
            <AboutCom />
            <BookSection />
            <ClientSlider />
        </>
    );
};

export default Homepage;



