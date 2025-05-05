import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-[calc(100vh-300px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;