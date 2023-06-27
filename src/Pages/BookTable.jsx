import React, { useEffect } from 'react';
import BookSection from '../Components/BookSection';


const BookTable = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);


    return (
        <>
            <div className='mt-5'>
                <BookSection />

            </div>

        </>
    );
};

export default BookTable;