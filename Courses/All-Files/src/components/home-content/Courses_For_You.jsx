import React from "react";
import { Link } from "react-router-dom";
import django from "../../media/django.jpg";
import java from "../../media/java.png";
import c from "../../media/c++.png";

function Courses_For_You() {
  return (
    <div className="bg-white dark:bg-gray-600/50 backdrop-blur-lg w-full pt-[20px]">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h1 className="text-3xl font-bold text-primary  py-[20px] dark:text-white">
          Courses For Free
        </h1>
        <Link className="border-b-2 border-indigo-500 dark:border-primary hover:bg-gray-400 p-2 dark:hover:bg-gray-600 flex justify-center items-center">
          <h1 className="dark:text-gray-300">Explore More</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-indigo-500 dark:text-primary"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      <div className="w-[90%] gap-4 mx-auto flex lg:flex-wrap justify-between items-center mt-[20px]">
        <div className="w-[300px] h-[350px] mb-6 mx-auto  bg-gray-100/50 backdrop-blur-md dark:bg-gray-800 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] hover:translate-y-[-10px]   transition-all flex flex-col">
          <div className="h-[145px] w-full">
            <img
              src="https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-[20px]">
            <h1 className="text-2xl font-semibold dark:text-white">Python</h1>
            <p className="text-[14px] mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              qui!
            </p>
            <div className="mt-[30px] flex justify-between items-center">
              <div>
                <svg
                  className="fill-gray-400 dark:fill-gray-500"
                  fill="none"
                  height="10"
                  width="38"
                  viewBox="0 0 38 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=" fill-current "
                    d="M9 4h6v2H9zM23 4h6v2h-6z"
                  ></path>
                  <circle
                    className="dark:fill-primary dark:text-primary text-indigo-500 fill-indigo-500"
                    cx="5"
                    cy="5"
                    fill="currentColor"
                    r="4"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="19"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="33"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                </svg>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Beginner
                </h4>
              </div>
              <button className="flex border border-black dark:border-white dark:text-white p-[10px]">
                <h3>Get Started</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-indigo-500 dark:text-primary"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[350px] mb-6 mx-auto  bg-gray-100/50 backdrop-blur-md dark:bg-gray-800 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] hover:translate-y-[-10px]   transition-all flex flex-col">
          <div className="h-[145px] w-full">
            <img src={django} alt="" className="h-full w-full" />
          </div>
          <div className="p-[20px]">
            <h1 className="text-2xl font-semibold dark:text-white">Django</h1>
            <p className="text-[14px] mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              qui!
            </p>
            <div className="mt-[30px] flex justify-between items-center">
              <div>
                <svg
                  className="fill-gray-400 dark:fill-gray-500"
                  fill="none"
                  height="10"
                  width="38"
                  viewBox="0 0 38 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=" fill-current "
                    d="M9 4h6v2H9zM23 4h6v2h-6z"
                  ></path>
                  <circle
                    className="dark:fill-primary dark:text-primary text-indigo-500 fill-indigo-500"
                    cx="5"
                    cy="5"
                    fill="currentColor"
                    r="4"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="19"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="33"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                </svg>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Beginner
                </h4>
              </div>
              <button className="flex border border-black dark:border-white dark:text-white p-[10px]">
                <h3>Get Started</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-indigo-500 dark:text-primary"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[350px] mb-6 mx-auto  bg-gray-100/50 backdrop-blur-md dark:bg-gray-800 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] hover:translate-y-[-10px]   transition-all flex flex-col">
          <div className="h-[145px] w-full">
            <img src={java} className="h-full w-full object-cover" />
          </div>
          <div className="p-[20px]">
            <h1 className="text-2xl font-semibold dark:text-white">Python</h1>
            <p className="text-[14px] mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              qui!
            </p>
            <div className="mt-[30px] flex justify-between items-center">
              <div>
                <svg
                  className="fill-gray-400 dark:fill-gray-500"
                  fill="none"
                  height="10"
                  width="38"
                  viewBox="0 0 38 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=" fill-current "
                    d="M9 4h6v2H9zM23 4h6v2h-6z"
                  ></path>
                  <circle
                    className="dark:fill-primary dark:text-primary text-indigo-500 fill-indigo-500"
                    cx="5"
                    cy="5"
                    fill="currentColor"
                    r="4"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="19"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="33"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                </svg>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Beginner
                </h4>
              </div>
              <button className="flex border border-black dark:border-white dark:text-white p-[10px]">
                <h3>Get Started</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-indigo-500 dark:text-primary"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[350px] mb-6 mx-auto  bg-gray-100/50 backdrop-blur-md dark:bg-gray-800 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] hover:translate-y-[-10px]   transition-all flex flex-col">
          <div className="h-[150px] w-full">
            <img src={c} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="p-[20px]">
            <h1 className="text-2xl font-semibold dark:text-white">Python</h1>
            <p className="text-[14px] mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              qui!
            </p>
            <div className="mt-[30px] flex justify-between items-center">
              <div>
                <svg
                  className="fill-gray-400 dark:fill-gray-500"
                  fill="none"
                  height="10"
                  width="38"
                  viewBox="0 0 38 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class=" fill-current "
                    d="M9 4h6v2H9zM23 4h6v2h-6z"
                  ></path>
                  <circle
                    className="dark:fill-primary dark:text-primary text-indigo-500 fill-indigo-500"
                    cx="5"
                    cy="5"
                    fill="currentColor"
                    r="4"
                    stroke="currentColor"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="19"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                  <circle
                    class="dark:text-gray-L500 fill-current stroke-current text-gray-L200"
                    cx="33"
                    cy="5"
                    r="4"
                    stroke-width="2"
                  ></circle>
                </svg>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  Beginner
                </h4>
              </div>
              <button className="flex border border-black dark:border-white dark:text-white p-[10px]">
                <h3>Get Started</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-indigo-500 dark:text-primary"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses_For_You;
