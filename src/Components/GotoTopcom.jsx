import React, { useState, useEffect } from 'react';

const GotoTopcom = () => {
    const [isHeaderActive, setIsHeaderActive] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsHeaderActive(false);
        } else {
            setIsHeaderActive(true);
        }
    };

    const hedenClik = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); /* Scroll to the top of the page */
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {!isHeaderActive && <button onClick={hedenClik} id="back_top">&#x1F815;</button>}
        </div>
    );
};

export default GotoTopcom;
