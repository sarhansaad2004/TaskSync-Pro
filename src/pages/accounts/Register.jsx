import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/login.svg";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser, updateUser, logOut, googleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    //change page title
    document.title = "Start Your Journey with Us: Sign Up";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    }
    //upload the image on ImgBB
    const formData = new FormData();
    formData.append("key", import.meta.env.VITE_IMGBBAPI);
    formData.append("image", photo);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoURL = data.data.display_url;

        createUser(email, password).then((result) => {
          const user = result.user;

          updateUser(user, name, photoURL)
            .then(() => {
              logOut();
              toast.success("Signup successful!");
              setTimeout(() => {
                navigate("/login");
              }, 4000);
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  const handleGoogleSignup = async () => {
    try {
      const response = await googleLogin();
      //get the name email photourl after google signup
      const name = response.user?.displayName;
      const email = response.user?.email;
      const photoURL = response.user?.photoURL;
      logOut();
      toast.success("Signup with Google successful!");
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    toast.error("Signup Failed!");
  };

  return (
    <section>
      <div className="flex md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
        <div className="hidden md:inline-block">
          <img className="h-[591px] w-[608px] lg:mt-4" src={Logo} alt="logo" />
        </div>
        <div className="w-full my-5 lg:my-8 bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
          <div className="space-y-4 p-8">
            <h1 className="text-center font-bold leading-tight tracking-tight text-gray-800 text-3xl lg:text-4xl mb-6 lg:mb-8">
              Create an account
            </h1>
            <form className="space-y-5 md:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John Smith"
                  required
                />
              </div>
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
                  htmlFor="photo"
                  className="block mb-2  font-medium text-gray-900"
                >
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/*"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

              {passwordError && (
                <div className="flex justify-start mb-3 md:text-lg font-medium">
                  <ul>
                    <li className="flex items-center py-1 gap-2 text-red-600">
                      <span className="text-xl">
                        <FaTimes />
                      </span>
                      <span>{passwordError}</span>
                    </li>
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Sign Up
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
                onClick={handleGoogleSignup}
              >
                <img src={Google} className="object-cover h-10 w-10" alt="" />
              </div>
              <div
                className="rounded-md p-2 bg-gray-100 border border-gray-200 h-14 w-14 flex items-center justify-center cursor-pointer"
                onClick={handleFacebookSignup}
              >
                <img src={Facebook} className="object-cover h-7 w-7" alt="" />
              </div>
            </div>
            <p className=" text-gray-500 text-center">
              Already have an account?{"  "}
              <Link to="/login">
                <span className="font-medium inline text-blue-500 hover:underline">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-left" autoClose={3000} />
    </section>
  );
};

export default Register;
