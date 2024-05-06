import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <section className="flex items-center h-screen bg-gray-200 font-poppins dark:bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto lg:px-6 ">
        <div className="justify-center">
          <div className="flex flex-wrap items-center ">
            <div className="w-full px-2 lg:px-4 xl:pr-12 lg:w-2/4 lg:mb-0 lg:py-0">
              <div className="text-center lg:text-left xl:text-center">
                <h1 className="inline-block mb-8 mt-8 md:mt-12 lg:mt-0 font-semibold text-gray-800 text-7xl lg:text-9xl dark:text-gray-400">
                  Oops!
                </h1>
                <h2 className="mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-400">
                  404 Page not found
                </h2>
                <p className="mb-8 text-xl text-gray-700 dark:text-gray-400">
                  Sorry! we are unable to find the page that you are looking
                  for...
                </p>
                <div className="flex flex-wrap items-center justify-start px-8 lg:px-0 pb-8 xl:justify-center xl:ml-5">
                  <Link
                    to="/"
                    className="w-full px-8 py-4 mb-5 md:mb-8 mr-0 text-base font-medium text-gray-100 uppercase bg-blue-600 rounded-full lg:w-auto hover:bg-blue-800 lg:mb-0 lg:mr-4 md:w-full "
                  >
                    Return Home
                  </Link>
                  <a
                    href=""
                    className="w-full px-8 py-4 text-base font-medium text-gray-700 uppercase border border-blue-300 rounded-full dark:border-gray-500 dark:hover:border-blue-800 dark:text-gray-400 lg:w-auto hover:text-gray-200 dark:hover:text-gray-200 hover:border-blue-800 md:w-full hover:bg-blue-800"
                  >
                    Report Problem
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
              <img
                src="https://i.postimg.cc/dt0HXw8J/pexels-mikhail-nilov-7534104.jpg"
                alt=""
                className="relative inset-0 object-cover w-full h-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
