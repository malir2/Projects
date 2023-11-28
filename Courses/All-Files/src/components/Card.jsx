import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-[300px] h-[350px] sm:w-[230px] mb-6 mx-auto  bg-gray-100/50 backdrop-blur-md dark:bg-gray-800 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] hover:translate-y-[-10px] transition-all flex flex-col">
      <div className="h-[150px] w-full">
        <img src={props.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-[20px]">
        <h1 className="text-2xl font-semibold dark:text-white">{props.name}</h1>
        <p className="text-[14px] mt-4 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, qui!
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
              <path class=" fill-current " d="M9 4h6v2H9zM23 4h6v2h-6z"></path>
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
          <Link to={props.src}>
            <button className="flex border border-black dark:border-white items-center dark:text-white p-[10px] sm:p-[5px]">
              <h3 className="sm:text-[14px]">Get Started</h3>
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
                className="text-indigo-500 dark:text-primary sm:w-[12px] sm:h-[12px]"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
