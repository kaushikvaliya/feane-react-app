import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HeaderComponent from './Commoncomponents/HeaderComponent';
import FooterCompo from './Commoncomponents/FooterCompo';
import Homepage from './Pages/Homepage.jsx';
import MenuPage from './Pages/MenuPage';
import Aboutpage from './Pages/Aboutpage';
import BookTable from './Pages/BookTable';
import GotoTopcom from './Components/GotoTopcom';


const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent bgcolor='transparent' />
            <Homepage />
            <FooterCompo />
            <GotoTopcom />
        </>,
    },
    {
        path: "/menu",
        element: <>
            <HeaderComponent bgcolor='#222222' />
            <MenuPage />
            <FooterCompo />
            <GotoTopcom />
        </>
    }, {
        path: "/about",
        element: <>
            <HeaderComponent bgcolor='#222222' />
            <Aboutpage />
            <FooterCompo />
            <GotoTopcom />
        </>
    },
    {
        path: "/booktable",
        element: <>
            <HeaderComponent bgcolor='#222222' />
            <BookTable />
            <FooterCompo />
            <GotoTopcom />
        </>
    }
]);

export default Mainrouter;
