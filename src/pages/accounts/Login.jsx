import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Logo from "../../assets/signup.jpg";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, logOut, googleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    //change page title
    document.title = "Sign In to Your Account - TaskSync Pro";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signIn(email, password);
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      setLoginError("Invalid email or password");
      console.error("Sign-in failed:", error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await googleLogin();
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      setLoginError("Sign-in with google failed!");
      console.error(error.message);
    }
  };

  const handleFacebookSignin = async () => {
    setLoginError("Sign-in with facebook failed!");
  };

  return (
    <section>
      <div className="flex flex-row-reverse md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
        <div className="hidden md:inline-block">
          <img className="h-[591px] w-[608px] lg:mt-10" src={Logo} alt="logo" />
        </div>
        <div className="w-full my-5 lg:my-8 bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
          <div className="space-y-4 p-8">
            <h1 className="text-center font-bold leading-tight tracking-tight text-gray-800 text-3xl lg:text-4xl mb-6 lg:mb-8">
              Login your account
            </h1>
            <form className="space-y-5 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2  font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@domain.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2  font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                  <div
                    className="absolute text-gray-700 text-lg right-3 bottom-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </div>

              {loginError && (
                <div className="flex justify-start mb-3 md:text-lg font-medium">
                  <ul>
                    <li className="flex items-center py-1 gap-2 text-red-600">
                      <span className="text-xl">
                        <FaTimes />
                      </span>
                      <span>{loginError}</span>
                    </li>
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Sign In
              </button>
            </form>
            <div className="flex items-center gap-1">
              <hr className="h-[1.5px] bg-gray-400 border-none w-full" />
              <p className="text-lg text-gray-700">OR</p>
              <hr className="h-[1.5px] bg-gray-400 border-none w-full" />
            </div>
            <div className="flex gap-6 items-center justify-center">
              <div
                className="rounded-md p-2 bg-gray-100 border border-gray-200 h-14 w-14 flex items-center justify-center cursor-pointer"
                onClick={handleGoogleSignin}
              >
                <img src={Google} className="object-cover h-10 w-10" alt="" />
              </div>
              <div
                className="rounded-md p-2 bg-gray-100 border border-gray-200 h-14 w-14 flex items-center justify-center cursor-pointer"
                onClick={handleFacebookSignin}
              >
                <img src={Facebook} className="object-cover h-7 w-7" alt="" />
              </div>
            </div>
            <p className=" text-gray-500 text-center">
              Don't have an account?{"  "}
              <Link to="/register">
                <span className="font-medium inline text-blue-600 hover:underline">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
