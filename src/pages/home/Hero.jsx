import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div data-aos="flip-up">
            <div className="relative flex items-center justify-center w-full text-center h-[27rem] md:h-96 lg:h-[32rem]"
            style={{
                backgroundImage: 'url("https://i.ibb.co/FXTqJ6F/hero.jpg")',
                backgroundSize: "cover",
              }}
            >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60"></div>
            <div className="z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                    Empower Your Productivity Journey
                    </h2>
                    <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                    Collaborate effortlessly, prioritize effectively, and achieve more with our intuitive platform built for efficiency and collaboration.
                    </p>
                    <div className="justify-center sm:flex">
                        <div className="">
                            <Link to="/dashboard"
                                className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500">
                                Let's Explore</Link>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3">
                            <a href="#"
                                className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 ">
                                Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;