import React from "react";
import pricing from "../media/pricing.png";

function Pricing() {
  return (
    <div className="w-full bg-green-200  dark:bg-gray-800">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-[50px] py-[20px] justify-around items-center">
          <div>
            <h1 className="text-6xl lg:text-3xl font-bold text-secondary dark:text-primary sm:text-lg">
              Plan And Pricing
            </h1>
            <p className="dark:text-gray-400 text-primary w-10/12 sm:text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, in eli.
            </p>
          </div>
          <div className="w-[500px] sm:w-[200px] xsm:hidden hover:scale-110 transition-all">
            <img src={pricing} alt="" className="drop-shadow-xl" />
          </div>
        </div>
      </section>
      <section className="h-full lg:h-screen relative sm:h-[1000px]">
        <img
          src="https://d3u7ubx0okog7j.cloudfront.net/images/3-38304_pastel-colored-wallpapers-free-backgr.width-1000.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <section className="absolute bg-gray-300/20 dark:bg-gray-600/30 h-full top-0 w-full flex flex-wrap justify-around lg:gap-4 items-center sm:py-[20px]">
          <section className="w-[300px] h-[450px] bg-gray-100/90 dark:bg-gray-700/90 backdrop-blur-xl dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_12px_0px_rgb(32,32,32)] p-[40px] transition-all sm:w-[240px] sm:h-[300px] sm:p-[20px]">
            <h1 className="text-xl font-semibold text-center text-gray-700 dark:text-primary sm:text-lg">
              Monthly
            </h1>
            <h1 className="text-4xl font-bold text-center mt-[20px] text-gray-800 dark:text-gray-300 sm:text-2xl sm:mt-[10px]">
              Rs 2000/-
            </h1>
            <div>
              <button className="border-indigo-500 dark:border-primary text-indigo-500 dark:text-primary font-bold  p-1 border-2 w-full mt-[50px] hover:bg-indigo-500 hover:text-white dark:hover:bg-primary dark:hover:text-white sm:text-[12px] sm:mt-[20px]">
                Purchase
              </button>
            </div>
            <div className="mt-[50px] sm:mt-[20px]">
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
            </div>
          </section>
          <section className="w-[300px] h-[450px] bg-gray-100/90 dark:bg-gray-700/90 backdrop-blur-xl dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_12px_0px_rgb(32,32,32)] p-[40px] transition-all sm:w-[240px] sm:h-[300px] sm:p-[20px]">
            <h1 className="text-xl font-semibold text-center text-gray-700 dark:text-primary sm:text-lg">
              Premium
            </h1>
            <h1 className="text-4xl font-bold text-center mt-[20px] text-gray-800 dark:text-gray-300 sm:text-2xl">
              Rs 19000/-
            </h1>
            <div>
              <button className="border-indigo-500 dark:border-primary text-indigo-500 dark:text-primary font-bold  p-1 border-2 w-full mt-[50px] hover:bg-indigo-500 hover:text-white dark:hover:bg-primary dark:hover:text-white sm:text-[12px] sm:mt-[20px]">
                Purchase
              </button>
            </div>
            <div className="mt-[50px] sm:mt-[20px]">
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
            </div>
          </section>
          <section className="w-[300px] h-[450px] bg-gray-100/90 dark:bg-gray-700/90 backdrop-blur-xl dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_12px_0px_rgb(32,32,32)] p-[40px] transition-all sm:w-[240px] sm:h-[300px] sm:p-[20px]">
            <h1 className="text-xl font-semibold text-center text-gray-700 dark:text-primary sm:text-lg">
              Monthly
            </h1>
            <h1 className="text-4xl font-bold text-center mt-[20px] text-gray-800 dark:text-gray-300 sm:text-2xl sm:mt-[10px]">
              Rs 8000/-
            </h1>
            <div>
              <button className="border-indigo-500 dark:border-primary text-indigo-500 dark:text-primary font-bold  p-1 border-2 w-full mt-[50px] hover:bg-indigo-500 hover:text-white dark:hover:bg-primary dark:hover:text-white sm:text-[12px] sm:mt-[20px]">
                Purchase
              </button>
            </div>
            <div className="mt-[50px] sm:mt-[20px]">
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px] "
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2 ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" dark:text-primary h-4 w-4 text-indigo-500 sm:h-[12px]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h1 className="text-gray-600 dark:text-gray-300 text-sm sm:text-[10px]">
                  12 months of access
                </h1>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Pricing;
