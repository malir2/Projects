import React, { useState, useRef, useEffect } from "react";
import Toggle_menu from "./navbar_components/Toggle_menu";
import { Link } from "react-router-dom";

function Navbar() {
  const profileRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const [profileMenu, setProfileMenu] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);
  const [navColor, setNavColor] = useState(true);

  function handleClickOutside(event) {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileMenu(false);
    }
  }

  function handleToggleMenu(event) {
    if (
      toggleMenuRef.current &&
      !toggleMenuRef.current.contains(event.target)
    ) {
      settoggleMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("click", handleToggleMenu);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("click", handleToggleMenu);
    };
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setNavColor(!navColor);
      } else {
        setNavColor(true);
      }
    };
  }, []);

  return (
    <nav
      className={` h-[80px] flex justify-between items-center fixed w-full top-0 ${
        navColor ? "bg-transparent" : "bg-primary"
      } transition-all ease-in-out duration-75 border-b md:h-[50px] z-20`}
    >
      <div>
        <Link to="/">
          <h1 className="text-4xl text-white font-bold font-primary ml-[20px] sm:text-sm">
            Constructor
          </h1>
        </Link>
      </div>

      <ul className="flex items-center gap-[100px] justify-center font-secondary text-white lg:hidden">
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>

      <div className="flex items-center gap-[30px]">
        <svg
          ref={toggleMenuRef}
          onClick={() => {
            settoggleMenu(!toggleMenu);
          }}
          className="h-[45px] w-[45px] hidden lg:block sm:h-[30px] sm:w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:serif="http://www.serif.com/"
          fill="#ffffff"
          width="800px"
          height="800px"
          viewBox="0 0 64 64"
          version="1.1"
          xml:space="preserve"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: "2",
          }}
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g transform="matrix(1,0,0,1,-1088,-192)">
              {" "}
              <rect id="Icons" x="0" y="0" style={{ fill: "none" }} />{" "}
              <g id="Icons1" serif:id="Icons">
                {" "}
                <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g>{" "}
                <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g>{" "}
                <g
                  id="hamburger-2"
                  transform="matrix(1.50868,0,0,1.01217,70.647,191.772)"
                >
                  {" "}
                  <g transform="matrix(0.149202,0,0,0.173437,664.206,42.142)">
                    {" "}
                    <rect
                      x="103.288"
                      y="8.535"
                      width="71.218"
                      height="34.133"
                      style={{ fillRule: "nonzero" }}
                    />{" "}
                  </g>{" "}
                  <g transform="matrix(0.149202,0,0,0.173437,664.345,27.4)">
                    {" "}
                    <rect
                      x="103.288"
                      y="8.535"
                      width="141.366"
                      height="34.133"
                      style={{ fillRule: "nonzero" }}
                    />{" "}
                  </g>{" "}
                  <g transform="matrix(0.149202,0,0,0.173437,664.345,12.658)">
                    {" "}
                    <rect
                      x="103.288"
                      y="8.535"
                      width="212.447"
                      height="34.133"
                      style={{ fillRule: "nonzero" }}
                    />{" "}
                  </g>{" "}
                </g>{" "}
                <g id="list-ol"> </g> <g id="list-task"> </g>{" "}
                <g id="trash"> </g> <g id="vertical-menu"> </g>{" "}
                <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g>{" "}
                <g id="Pen"> </g>{" "}
                <g id="Pen1" serif:id="Pen">
                  {" "}
                </g>{" "}
                <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g>{" "}
                <g id="info"> </g> <g id="warning"> </g>{" "}
                <g id="plus-circle"> </g> <g id="minus-circle"> </g>{" "}
                <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g>{" "}
                <g id="radio-check"> </g> <g id="eye-slash"> </g>{" "}
                <g id="eye"> </g> <g id="toggle-off"> </g>{" "}
                <g id="shredder"> </g>{" "}
                <g
                  id="spinner--loading--dots-"
                  serif:id="spinner [loading, dots]"
                >
                  {" "}
                </g>{" "}
                <g id="react"> </g> <g id="check-selected"> </g>{" "}
                <g id="turn-off"> </g> <g id="code-block"> </g>{" "}
                <g id="user"> </g> <g id="coffee-bean"> </g>{" "}
                <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
                  {" "}
                  <g id="coffee-beans">
                    {" "}
                    <g id="coffee-bean1" serif:id="coffee-bean">
                      {" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
                <g id="coffee-bean-filled"> </g>{" "}
                <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
                  {" "}
                  <g id="coffee-beans-filled">
                    {" "}
                    <g id="coffee-bean2" serif:id="coffee-bean">
                      {" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
                <g id="clipboard"> </g>{" "}
                <g transform="matrix(1,0,0,1,128.011,1.35415)">
                  {" "}
                  <g id="clipboard-paste"> </g>{" "}
                </g>{" "}
                <g id="clipboard-copy"> </g> <g id="Layer1"> </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <div className="border w-[50px] h-[50px] sm:w-[30px] sm:h-[30px] rounded-full overflow-hidden mr-[40px]">
          <img
            ref={profileRef}
            onClick={() => {
              setProfileMenu(!profileMenu);
            }}
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            alt=""
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>
      </div>

      {/* Profile menu */}

      <div
        className={`w-[200px] h-[200px] bg-primary fixed sm:top-[55px] top-[83px] border border-gray-600 rounded-2xl z-10 flex flex-col gap-[30px] justify-center items-center ${
          profileMenu
            ? "right-[10px]"
            : "right-[-80%] transition-all ease-in-out"
        } transition-all duration-100 ease-in-out`}
      >
        <div className="flex items-center gap-[20px] text-white font-secondary">
          <Link to="/login">
            <div>
              <svg
                className="w-[32px] fill-white"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"> </style>{" "}
                  <g>
                    {" "}
                    <path
                      class="st0"
                      d="M155.81,0v173.889h33.417V33.417h235.592l-74.87,50.656c-8.469,5.727-13.535,15.289-13.535,25.503v286.24 H189.227V282.079H155.81v147.154h180.604v70.93c0,4.382,2.423,8.404,6.29,10.451c3.867,2.056,8.558,1.811,12.189-0.644 l119.318-80.736V0H155.81z"
                    ></path>{" "}
                    <path
                      class="st0"
                      d="M228.657,290.4c0,1.844,1.068,3.524,2.75,4.3c1.664,0.775,3.638,0.514,5.042-0.685l78.044-66.035 l-78.044-66.034c-1.404-1.2-3.378-1.46-5.042-0.686c-1.681,0.775-2.75,2.456-2.75,4.3v33.392H37.79v58.064h190.868V290.4z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <h1>Log In</h1>
          </Link>
        </div>
        <div className="flex items-center gap-[20px] text-white font-secondary">
          <Link to="/logout">
            <div>
              <svg
                className="w-[32px] fill-white"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                  <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                </g>
              </svg>
            </div>
            <h1>Sign Up</h1>
          </Link>
        </div>
      </div>
      <div
        className={`fixed ${
          toggleMenu ? "top-[40px]" : "top-[-100%]"
        } transition-all ease-in-out duration-100 z-10`}
      >
        <Toggle_menu />
      </div>
    </nav>
  );
}

export default Navbar;
