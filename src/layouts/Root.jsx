import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[location.pathname]);

  const noShared = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('dashboard') ;

    return (
        <div>
            {noShared || <Navbar/>}
            <Outlet/>
            {noShared || <Footer/>}
        </div>
    );
};

export default Root;