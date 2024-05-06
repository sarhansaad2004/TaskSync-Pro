import React, { useEffect } from 'react';
import Hero from './Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About';
import Service from './Service';
import User from './User';
AOS.init();
import { Element } from "react-scroll";

const Home = () => {
  useEffect(() => {
    document.title = 'Tasksync Pro - Empowering Your Productivity Journey';
  }, []);


  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Service/>
      <User/>
      <Element name="about">
        <About />
      </Element>
    </div>
  );
};

export default Home;
