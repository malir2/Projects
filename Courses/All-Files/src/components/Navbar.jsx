import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Profile_Dropdown from "./navbar-compnents/Profile_Dropdown";

function Navbar() {
  // Profile dropdown section setup
  const [profile, setProfile] = useState(false);
  const profileRef = useRef(null);
  const toggleDropdown = () => {
    setProfile(!profile);
  };
  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Sidebar for tablet and mobile
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <nav className="sticky border-b dark:border-gray-700 top-0 flex w-full justify-between items-center h-[60px] z-20 dark:bg-secondary bg-[#009999]">
        <Link to="/">
          <div className="ml-[40px] text-3xl font-bold text-white dark:text-primary sm:text-xl">
            Logo
          </div>
        </Link>
        <div className="w-[40%] lg:hidden">
          <ul className="flex justify-between items-center text-white dark:text-gray-300">
            <li>
              <Link
                to="/explore"
                className="p-4 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/prices"
                className="p-4 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link className="p-4 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50">
                About
              </Link>
            </li>
            <li>
              <Link className="p-4 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-[40px] mr-[40px] sm:mr-[10px] items-center sm:gap-2">
          <div>
            <button className="flex items-center gap-1 text-white font-bold border-r-2 p-3 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50">
              <div>
                <svg
                  className="w-[25px] sm:w-[12px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="stroke-white"
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="dark:text-gray-300 sm:text-sm">Search</h1>
            </button>
          </div>
          <button
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <svg
              className="w-[35px] sm:w-[20px] fill-white hidden lg:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z" />
            </svg>
          </button>
          <button
            ref={profileRef}
            onClick={toggleDropdown}
            className="relative p-2 border-gray-300 dark:hover:bg-gray-400/20 hover:bg-gray-600/50"
          >
            <div>
              <div className="rounded-full overflow-hidden h-[40px] w-[40px] sm:h-[20px] sm:w-[20px]">
                <img
                  className="object-cover h-full w-full"
                  src="https://www.canberratimes.com.au/images/transform/v1/crop/frm/silverstone-feed-data/5950a37e-f3df-48aa-b314-e8736a12d573.jpg/r0_0_800_600_w800_h600_fmax.jpg"
                  alt="Your Photo"
                />
              </div>
            </div>
          </button>
        </div>
      </nav>

      {/* Profile dropdown section */}
      <section
        id="profile"
        className={`fixed ${
          profile ? "top-[62px]" : "top-[-100%]"
        } right-2 transition-all z-10`}
      >
        <Profile_Dropdown />
      </section>

      {/* Side bar for tablet and mobile */}
      <section
        id="sideBar"
        className={`fixed ${
          sideBar ? "right-0" : "right-[-100%]"
        } w-full transition-all z-30`}
      >
        <div
          className={`w-full  bg-white/50 dark:bg-primary/50 backdrop-blur-xl dark:border-black border-t-[1px] flex justify-end h-screen`}
        >
          <button
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <svg
              className="w-[20px] absolute top-2 right-2 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className="w-[250px] h-full bg-primary dark:bg-secondary flex justify-center items-center">
            <ul className="gap-[60px] flex flex-col text-white dark:text-white w-full text-center">
              <Link>
                <li>Explore</li>
              </Link>
              <Link>
                <li>Pricing</li>
              </Link>
              <Link>
                <li>About</li>
              </Link>
              <Link>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
