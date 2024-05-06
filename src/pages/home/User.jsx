import React from 'react';
import { FaStar } from 'react-icons/fa6';

const User = () => {
    return (
        <div data-aos="fade-right">
            <section className="flex items-center">
                <div className="p-4 mx-auto max-w-7xl">
                    <div className="text-center mb-14">
                        <h1 className="mb-4 text-3xl font-bold leading-[1.2] text-gray-800 md:text-[40px]">Type of people using Tasksync Pro</h1>
                        <p className="max-w-xl mx-auto text-gray-500">
                            Explore what our users have to say about TaskSync Pro!
                        </p>
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/k476MN5/woman-3.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                            Hugh Denims
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                            Game Developer
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "TaskSync Pro has been a game-changer for my productivity. The intuitive
                                            interface and powerful features make it a must-have for any professional."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/0D6hsjV/David-1.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                            David Winson
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                        Software Developer
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "TaskSync Pro has greatly improved my productivity. It's a must-have tool for anyone managing multiple tasks."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/X4mz1SH/man-2.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                        Alice Smith
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                        Marketing Specialist
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "I love using TaskSync Pro! It's user-friendly and helps me stay organized with my daily tasks. Highly recommended."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/s9WMJZr/man-7.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                        Robert Johnson
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                            Project Manager
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "TaskSync Pro has made collaboration within my team seamless. The features are top-notch, and it has become an essential part of our workflow."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/2nQkkJT/woman-4.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                        Emily Davis
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                        Graphic Designer
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "TaskSync Pro has streamlined my design process. It's a fantastic tool for keeping track of project deadlines and client feedback."
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center mb-5 gap-x-4">
                                    <div className="relative w-24 h-24 rounded-full">
                                        <span className="absolute bottom-0 right-0 inline-block p-1 text-xs text-white bg-blue-500 rounded-full ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                                className="bi bi-quote" viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                                            </svg>
                                        </span>
                                        <img className="object-cover w-full h-full rounded-full"
                                            src="https://i.ibb.co/pLCS8r5/woman-2.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <h2 className="text-lg font-bold text-gray-800">
                                        Sophia Lee
                                        </h2>
                                        <span className="block text-xs font-semibold text-blue-500 uppercase">
                                        Financial Analyst
                                        </span>
                                        <span className="flex mt-2 text-orange-500 gap-x-0.5">
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mb-8 bg-white rounded shadow">
                                    <div className="absolute inline-block overflow-hidden -translate-x-1/2 w-7 -top-4 left-1/2">
                                        <div className="w-4 h-4 origin-bottom-left transform rotate-45 bg-white drop-shadow">
                                        </div>
                                    </div>
                                    <div className="relative z-20 p-8 h-48 lg:h-44">
                                        <p className="text-base leading-7 text-gray-400">
                                            "As a financial analyst, TaskSync Pro has become my go-to for managing financial reports and deadlines. It's a game-changer!"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default User;
