import React from "react";
import Card_Slider from "./explore/Card_Slider";
import Free_Courses from "./explore/Free_Courses";
import Premium_Content from "./explore/Premium_Content";

function Explore() {
  return (
    <div className="w-full bg-green-200  dark:bg-gray-800">
      <h1 className="text-4xl sm:text-md font-bold text-black pt-[30px] mb-[40px] pl-[40px] dark:text-primary">
        Explore Your Skill!
      </h1>
      <Card_Slider />
      <div className="w-full h-auto p-[20px] bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-semibold mb-[20px] ml-[40px] dark:text-primary sm:text-md">
          Get Started With Our Free Courses
        </h1>
        <Free_Courses />
      </div>
      <div className="w-full h-auto p-[20px]">
        <h1 className="text-3xl font-semibold mb-[20px] ml-[40px] dark:text-primary sm:text-md">
          Get Started With Our Free Courses
        </h1>
        <Premium_Content />
        <button className="flex border border-black dark:border-white dark:text-white py-[10px] px-[20px] mx-auto">
          <h3>Explore More</h3>
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
  );
}

export default Explore;
