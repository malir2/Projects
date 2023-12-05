import React, { useEffect, useRef, useState } from "react";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [li, setLi] = useState(false);
  const [sideLi, setSideLi] = useState(false);
  const [sidePages, setSidePages] = useState(false);
  const [pages, setPages] = useState(false);
  const [nav, setNav] = useState(true);
  const [dispaySidebar, setDisplaySidebar] = useState(false);
  const pageRef = useRef(null);
  const sidePagesRef = useRef(null);

  const mouseOverPage = () => {
    setLi(!li);
    setPages(!pages);
  };

  const handleOutsideClick = (event) => {
    if (pageRef.current && !pageRef.current.contains(event.target)) {
      setLi(false);
      setPages(false);
    }
  };
  const handleOutsideClick2 = (event) => {
    if (sidePagesRef.current && !sidePagesRef.current.contains(event.target)) {
      setSidePages(false);
      setSideLi(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("click", handleOutsideClick2);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNav(false);
      } else {
        setNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 flex items-center gap-[200px] justify-around lg:justify-between font-primary z-30 ${
        nav ? "bg-transparent" : "bg-white"
      } ${nav ? "h-[124px] sm:h-[80px]" : "h-[80px]"} ${
        nav ? "shadow-none" : "shadow-[0px_4px_6px_2px_#a0a0a0]"
      } transition-all ease-in-out duration-75`}
    >
      <div>
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-[230px] hover:opacity-50 transition-all lg:ml-[35px]"
          />
        </Link>
      </div>
      <div className="flex gap-[80px] items-center lg:hidden">
        <ul className="flex gap-[40px] text-sm font-semibold text-secondary items-center ">
          <Link to="/">
            <li className="hover:text-primary">
              <p>HOME</p>
            </li>
          </Link>
          <Link>
            <li
              ref={pageRef}
              onClick={mouseOverPage}
              className="flex gap-1 relative items-center"
            >
              <p className={`${li ? "text-primary" : "text-secondary"}`}>
                PAGES
              </p>
              <svg
                className={`${
                  li ? "rotate-180" : "rotate-0"
                } w-[25px] h-[20px] transition-all`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    className={`${li ? "fill-primary" : "fill-secondary"} `}
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  ></path>{" "}
                </g>
              </svg>

              {/* Pages dropdown */}

              <div
                className={`absolute w-[250px] h-[180px] bg-primary rounded-md top-[150%] left-[0]
              shadow-[0px_0px_20px_0px_#999999FF] overflow-hidden ${
                pages ? "translate-y-0" : "translate-y-[30px]"
              } ${pages ? "visible" : "invisible"} ${
                  pages ? "opacity-1" : "opacity-0"
                } transition-all`}
              >
                <ul className="w-full h-full flex flex-col">
                  <Link to="/about">
                    <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                      About
                    </li>
                  </Link>

                  <Link to="/token-sale">
                    <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                      Token Sale
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                      Contact
                    </li>
                  </Link>
                  <Link to="/faq">
                    <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                      FAQ
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </Link>
          <Link to="/features">
            <li className="hover:text-primary">FEATURE</li>
          </Link>
          <Link to="/roadmap">
            <li className="hover:text-primary">ROADMAP</li>
          </Link>
          <Link to="/team">
            <li className="hover:text-primary">TEAM</li>
          </Link>
        </ul>
        <button className="text-white bg-primary font-semibold h-[44px] w-[127px] rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_20px_29px_-17px_#16d5ffFF]  ">
          SIGN IN
        </button>
      </div>

      {/* Hamburger Icon and sidebar */}

      <div className="hidden lg:block">
        <button
          onClick={() => {
            setDisplaySidebar(!dispaySidebar);
          }}
        >
          <svg
            className="w-[50px] h-[50px] mr-[40px] sm:w-[30px] sm:h-[30px]"
            fill="#16d5ffFF"
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: "2",
            }}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g transform="matrix(1,0,0,1,-1024,-192)">
                {" "}
                <rect
                  id="Icons"
                  x="0"
                  y="0"
                  width="1280"
                  height="800"
                  style={{ fill: "none" }}
                ></rect>{" "}
                <g id="Icons1" serif:id="Icons">
                  {" "}
                  <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g>{" "}
                  <g id="H3"> </g> <g id="list-ul"> </g>{" "}
                  <g
                    id="hamburger-1"
                    transform="matrix(1.50868,0,0,1.01217,6.67804,191.698)"
                  >
                    {" "}
                    <g transform="matrix(0.149202,0,0,0.173437,664.206,42.142)">
                      {" "}
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: "nonzero" }}
                      ></rect>{" "}
                    </g>{" "}
                    <g transform="matrix(0.149202,0,0,0.173437,664.345,27.4)">
                      {" "}
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: "nonzero" }}
                      ></rect>{" "}
                    </g>{" "}
                    <g transform="matrix(0.149202,0,0,0.173437,664.345,12.658)">
                      {" "}
                      <rect
                        x="103.288"
                        y="8.535"
                        width="212.447"
                        height="34.133"
                        style={{ fillRule: "nonzero" }}
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g id="hamburger-2"> </g> <g id="list-ol"> </g>{" "}
                  <g id="list-task"> </g> <g id="trash"> </g>{" "}
                  <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g>{" "}
                  <g id="sidebar-2"> </g> <g id="Pen"> </g>{" "}
                  <g id="Pen1" serif:id="Pen">
                    {" "}
                  </g>{" "}
                  <g id="clock"> </g> <g id="external-link"> </g>{" "}
                  <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g>{" "}
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
        </button>
      </div>

      {/* side menu */}
      <div
        className={`h-screen top-0 fixed w-[50%] bg-primary transition-all ${
          dispaySidebar ? "right-0" : "right-[-100%]"
        } `}
      >
        <button
          onClick={() => {
            setDisplaySidebar(!dispaySidebar);
          }}
        >
          <svg
            className="w-[30px] h-[30px] sm:w-[15px] sm:h-[15px] sm:right-[20px] absolute right-[50px] top-[30px]"
            fill="#ffffff"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                fill-rule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        </button>
        {/* Menu of sidebar */}
        <div className="flex ml-[20px] h-full items-center w-full">
          <ul className="flex flex-col text-sm font-semibold text-white w-full gap-[50px]">
            <Link to="/">
              <li>
                <p>HOME</p>
              </li>
            </Link>
            <Link>
              <li
                ref={sidePagesRef}
                onClick={() => {
                  setSideLi(!sideLi);
                  setSidePages(!sidePages);
                }}
                className="flex gap-1 relative items-center justify-between w-full"
              >
                <p className="fill-white">PAGES</p>
                <svg
                  className={`${
                    sideLi ? "rotate-180" : "rotate-0"
                  } w-[25px] h-[20px] transition-all mr-[50px]`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      className="fill-white"
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    ></path>{" "}
                  </g>
                </svg>

                {/* Pages dropdown */}

                <div
                  className={`absolute w-[250px] h-[225px] sm:w-[150px] xsm:w-[100px] bg-primary rounded-md top-[150%] left-[0]
              shadow-[0px_0px_20px_0px_#999999FF] overflow-hidden ${
                sidePages
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[30px] opacity-0"
              } transition-all `}
                >
                  <ul className="w-full h-full flex flex-col text-primary">
                    <Link to="/about">
                      <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                        About
                      </li>
                    </Link>
                    <Link to="/token-sale">
                      <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                        Token Sale
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                        Contact
                      </li>
                    </Link>
                    <Link to="/faq">
                      <li className="bg-white p-3 border-b border-gray-300 hover:translate-x-[5px] transition-all">
                        FAQ
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>
            <Link to="/features">
              <li>FEATURE</li>
            </Link>
            <Link to="/roadmap">
              <li>ROADMAP</li>
            </Link>
            <Link to="/team">
              <li>TEAM</li>
            </Link>
            <Link>
              <li>SIGN IN</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
