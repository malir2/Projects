import React from "react";
import { Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

function Profile_Dropdown() {
  return (
    <ul className="border dark:border-gray-600 rounded-lg dark:bg-gray-800/50 w-[150px] h-[300px] bg-gray-400/40 backdrop-blur-lg flex flex-col  justify-center gap-4">
      <Link>
        <li className="flex flex-col items-center hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-1 ">
          <svg
            className="h-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="stroke-primary dark:stroke-white"
              d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="dark:text-primary">Profile</h1>
        </li>
      </Link>
      <button>
        <li className="text-primary dark:text-white flex flex-col items-center hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-1 ">
          <DarkThemeToggle className="text-primary dark:hover:bg-transparent hover:bg-transparent dark:text-white border-none focus:ring-0 p-0" />
          <h1 className="text-black dark:text-primary ">Theme</h1>
        </li>
      </button>
      <Link>
        <li className="flex flex-col items-center hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[28px]"
            viewBox="0 0 24 24"
          >
            <title>i</title>
            <g id="Complete">
              <g id="user-add">
                <g>
                  <path
                    className="stroke-primary dark:stroke-white"
                    d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <circle
                    className="stroke-primary dark:stroke-white"
                    cx="9"
                    cy="7"
                    r="4"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    className="stroke-primary dark:stroke-white"
                    x1="17"
                    y1="11"
                    x2="23"
                    y2="11"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    className="stroke-primary dark:stroke-white"
                    x1="20"
                    y1="8"
                    x2="20"
                    y2="14"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1 className="dark:text-primary">Sign Up</h1>
        </li>
      </Link>
      <Link className="">
        <li className="flex flex-col items-center hover:bg-gray-400/50 dark:hover:bg-gray-600/50 p-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[23px] p-0 dark:fill-white fill-primary"
            viewBox="0 0 24 24"
            id="magicoon-Filled"
          >
            <defs></defs>

            <title>log-in</title>

            <g id="log-in-Filled">
              <path
                className="cls-1 text-primary dark:text-white fill-primary dark:fill-white"
                id="log-in-Filled-2"
                data-name="log-in-Filled"
                d="M21,7V17a5.006,5.006,0,0,1-5,5H12a1,1,0,0,1,0-2h4a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3H12a1,1,0,0,1,0-2h4A5.006,5.006,0,0,1,21,7Zm-6.293,4.293-4-4A1,1,0,1,0,9.293,8.707L11.586,11H4a1,1,0,0,0,0,2h7.586L9.293,15.293a1,1,0,1,0,1.414,1.414l4-4A1,1,0,0,0,14.707,11.293Z"
              />
            </g>
          </svg>
          <h1 className="dark:text-primary">Login</h1>
        </li>
      </Link>
    </ul>
  );
}

export default Profile_Dropdown;
