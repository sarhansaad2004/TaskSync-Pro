import React, { useEffect } from "react";
const Contactus = () => {
  useEffect(() => {
    document.title = 'Contact Us - TaskSync Pro';
  }, []);

  return (
    <div>

      <section className="py-6 md:mt-6 lg:mt-2">
        <div className="justify-center flex-1 max-w-5xl px-5 py-4 mx-auto lg:py-10 md:px-7">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-[74px] left-7 text-[120px] text-gray-400 font-bold opacity-10">
                  Contact
                </div>
                <h1 className="text-5xl font-bold text-gray-600">
                  {" "}
                  Our <span className="text-blue-500"> Contact</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
              <p className="mb-16 text-base text-center text-gray-500">
                Connect with us to explore opportunities, resolve queries, or
                just to say hello. We value your feedback and look forward to
                hearing from you!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-0 mb-6 md:mb-8 -mx-4">
            <div className="w-full md:w-56 px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow bg-gray-50 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                  Email
                </h2>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 md:text-lg "
                >
                  help@tasksync.com
                </a>
              </div>
            </div>
            <div className="w-full md:w-56 px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow bg-gray-50 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                  Phone
                </h2>
                <a
                  href="#"
                  className="text-base font-medium text-gray-500 md:text-lg "
                >
                  +9876542312
                </a>
              </div>
            </div>
            <div className="w-full md:w-56 px-4 mb-4 lg:w-1/3 lg:mb-0">
              <div className="h-full py-12 text-center transition-all rounded-lg shadow bg-gray-50 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid-3x3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"></path>
                  </svg>
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl ">
                  Social
                </h2>
                <a
                  href="#"
                  className="inline-block mr-4 text-blue-600  hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-block mr-4 text-blue-400  hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-block mr-4 text-blue-500 hover:text-blue-600 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-6 h-6 bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="px-8 py-8 bg-white border rounded-md shadow-md">
            <form action="">
              <div className="mb-6">
                <h2 className="text-xl text-center font-bold text-gray-700 ">
                  Please send message for futher information!
                </h2>
              </div>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50  "
                    type="text"
                    placeholder="First Name.."
                    required=""
                  />
                </div>
                <div className="w-full px-2 lg:w-1/2">
                  <input
                    className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50  "
                    type="text"
                    placeholder="Last Name.."
                    required=""
                  />
                </div>
              </div>
              <input
                className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50  "
                type="email"
                placeholder="abc@gmail.com"
                required=""
              />
              <textarea
                rows="4"
                type="message"
                placeholder="Write a message..."
                required=""
                className="block w-full px-4 mb-4 rounded-md leading-tight text-gray-700 border bg-gray-50 py-7"
              ></textarea>
              <button className="w-full py-4 mt-2 font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md  hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
