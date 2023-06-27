import React, { useEffect } from 'react';
import AboutCom from '../Components/About_Com';


const Aboutpage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    return (
        <>
            <div className='mt-5'>

                <AboutCom />
            </div>
        </>
    );
};

export default Aboutpage;