import React, { useEffect } from 'react';
import MenuSection from '../Components/MenuSection.jsx';


const MenuPage = () => {



    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);


    return (
        <>
            <div style={{ marginTop: "100px" }} className='layout_padding'>
                <MenuSection />

            </div>
        </>
    );
};

export default MenuPage;