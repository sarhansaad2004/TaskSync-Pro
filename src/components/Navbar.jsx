import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, logOut } = useAuth();

  const navlist = (
    <>
      <NavLink
        className={(navData) =>
          navData.isActive
            ? "text-blue-500  border-b-2 border-blue-500"
            : "hover:text-blue-600 text-gray-800"
        }
        to="/"
      >
        Home
      </NavLink>

      {user && (
        <NavLink
          className={(navData) =>
            navData.isActive
              ? "text-blue-500  border-b-2 border-blue-500"
              : "hover:text-blue-600 text-gray-800"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      )}

      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="hover:text-blue-600 cursor-pointer text-gray-800"
      >
        About Us
      </ScrollLink>

      <NavLink
        className={(navData) =>
          navData.isActive
            ? "text-blue-500  border-b-2 border-blue-500"
            : "hover:text-blue-600 text-gray-800"
        }
        to="/contactus"
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <section className="shadow-md bg-gray-100">
      <div className="px-4 md:px-5">
        <nav className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-[26px] md:text-3xl font-semibold leading-none text-gray-800"
          >
            TaskSync<span className="text-blue-500"> Pro</span>
          </Link>
          <div className="flex justify-between items-center flex-row-reverse lg:flex-row lg:space-x-2">
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 text-blue-500 border border-blue-200  rounded hover:text-blue-600 hover:border-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <ul className="hidden lg:w-auto lg:space-x-6 lg:items-center lg:flex text-lg font-medium text-gray-700">
              {navlist}
            </ul>
            <div
              className={`${
                user
                  ? "flex gap-2 mr-3 md:mr-2 flex-row-reverse md:flex-row items-center justify-center"
                  : "block"
              }`}
            >
              <div className="flex items-center justify-center gap-4 lg:ml-4 lg:mr-2">
                {user ? (
                  <div className="hidden md:inline-block lg:hidden xl:inline-block">
                    <p className="text-lg font-medium text-gray-800">
                      {user.displayName}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                {user && (
                  <img
                    className="cursor-pointer object-cover rounded-full h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                )}
              </div>
            </div>
            <div className="hidden lg:block">
              {user ? (
                <button
                  onClick={() => {
                    logOut();
                  }}
                  className="inline-block px-5 py-3 mr-2 font-semibold leading-none text-gray-100 bg-blue-500 hover:bg-blue-600 border border-gray-100 rounded"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="inline-block px-5 py-3 mr-4  font-semibold leading-none text-blue-500 border border-blue-500 rounded hover:text-blue-700 hover:border-blue-700">
                      Log In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="inline-block px-5 py-3 mr-2 font-semibold leading-none text-gray-100 bg-blue-600 hover:bg-blue-500 border border-gray-100 rounded">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 lg:hidden ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-50 h-screen p-3 duration-500 transform bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between">
            <Link className="p-2 text-2xl font-bold" to="/">
              TaskSync<span className="text-blue-500"> Pro</span>
            </Link>
            <button
              className="p-2 text-blue-500 rounded-md hover:text-blue-300 lg:hidden"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul
            className="px-4 text-left mt-4 font-medium md:text-lg flex flex-col items-start gap-3"
            onClick={() => setOpen(false)}
          >
            {navlist}
          </ul>
          {user ? (
            <>
              <div className="block mt-5 lg:hidden px-5">
                <button
                  onClick={() => {
                    logOut();
                    setOpen(false);
                  }}
                  className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 rounded-full bg-blue-600 hover:bg-blue-500 border border-gray-100"
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="block mt-5 lg:hidden px-5">
                <Link to="/login">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center text-gray-100 bg-blue-600 hover:bg-blue-500 rounded-full"
                  >
                    Login
                  </button>
                </Link>
              </div>
              <div className="block mt-3 lg:hidden px-5">
                <Link to="/register">
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-block w-full px-5 py-3 mr-2 font-semibold leading-none text-center border rounded-full hover:text-white bg-blue-600 text-gray-100 hover:bg-blue-500 border-gray-100"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
