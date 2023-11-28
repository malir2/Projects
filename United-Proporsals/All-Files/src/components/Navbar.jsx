import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/log.png";
import user from "../../images/user.png";
import settings from "../../images/settings.png";
import logout from "../../images/logout.png";
import close from "../../images/close.png";

function Navbar() {
  const [display, setDisplay] = useState(false);
  const [top, setTop] = useState(false);
  const [right, setRight] = useState(true);
  const [profile, setProfile] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [sideSubBar, setSideSubBar] = useState(true);

  return (
    <>
      <div className="h-[60px] absolute w-full bg-white/60 backdrop-blur-lg z-20 flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-[70px] xsm:w-[40px] ml-[20px]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex w-[800px] lg:hidden justify-between">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/feature-profiles" className="hover:text-primary">
                Feature Profile
              </Link>
            </li>
            <li>
              <Link to="/favourite-profiles" className="hover:text-primary">
                My Favourite
              </Link>
            </li>
            <li className="">
              <button
                onClick={() => {
                  setTop(!top);
                }}
                className="hover:text-primary relative flex items-center z-10"
              >
                Affliate Program
                <svg
                  className="h-[12px] ml-[3px] hover:fill-primary fill-black rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
              </button>
              <div
                className={`absolute ${
                  top ? "top-[60px]" : "top-[-1000%]"
                } transition-all z-50`}
              >
                <ul
                  className="w-[200px] flex flex-col gap-3 pt-[10px] text-center  pb-[10px] border border-primary bg-primary rounded-lg text-white z-10

              "
                >
                  <Link to="/marriage-hall">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Marriage Hall
                    </li>
                  </Link>
                  <Link to="/marquee">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Marquee
                    </li>
                  </Link>
                  <Link to="/jewellers">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Jewellers
                    </li>
                  </Link>
                  <Link to="/caterers">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Caterers
                    </li>
                  </Link>
                  <Link to="/car-rental-service">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Car Rental Service
                    </li>
                  </Link>
                  <Link to="/decoration">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Decoration
                    </li>
                  </Link>
                  <Link to="/nikkah-khawan">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Nikkah Khawan
                    </li>
                  </Link>
                  <Link to="/event-planner">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Event Planner
                    </li>
                  </Link>
                  <Link to="/boutique">
                    <li className="w-full hover:bg-white hover:text-primary">
                      Boutique
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex mr-[30px] items-center">
          {/* Hamburger icon */}
          <button
            onClick={() => {
              setSideBar(!sideBar);
            }}
            className="hidden lg:block"
          >
            <svg
              className="h-[30px] xsm:h-[15px] mr-[20px] xsm:mr-[10px] fill-black hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 12 12"
              enable-background="new 0 0 12 12"
              version="1.1"
              xml:space="preserve"
            >
              <g>
                <rect height="1" width="11" x="0.5" y="5.5" />

                <rect height="1" width="11" x="0.5" y="2.5" />

                <rect height="1" width="11" x="0.5" y="8.5" />
              </g>
            </svg>
          </button>
          <button>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className=" text-[25px] mr-[10px] xsm:h-[15px] hover:fill-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
              <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setRight(!right);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className=" text-[25px] mr-[20px] xsm:h-[15px] xsm:mr-[10px] hover:fill-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M255.9 456c31.1 0 48.1-22 48.1-53h-96.3c0 31 17 53 48.2 53zM412 352.2c-15.4-20.3-45.7-32.2-45.7-123.1 0-93.3-41.2-130.8-79.6-139.8-3.6-.9-6.2-2.1-6.2-5.9v-2.9c0-13.4-11-24.7-24.4-24.6-13.4-.2-24.4 11.2-24.4 24.6v2.9c0 3.7-2.6 5-6.2 5.9-38.5 9.1-79.6 46.5-79.6 139.8 0 90.9-30.3 102.7-45.7 123.1-9.9 13.1-.5 31.8 15.9 31.8h280.1c16.3 0 25.7-18.8 15.8-31.8z"></path>
            </svg>
          </button>
          <button
            onClick={() => {
              setProfile(!profile);
            }}
            className="bg-primary w-[40px] xsm:w-[20px] xsm:h-[20px] xsm:text-[8px] h-[40px] rounded-[50%] text-white font-semibold"
          >
            F
          </button>
        </div>
      </div>
      <section
        className={`h-[500px] w-[500px] sm:w-[260px] overflow-y-auto fixed bg-white z-10 bottom-0 ${
          right ? "right-[-150%]" : "right-0"
        } transition-all rounded-lg drop-shadow-xl overflow-hidden`}
      >
        <h1 className="bg-primary text-white p-2 text-xl sm:text-lg">
          Notifications
        </h1>
        <div className="w-[70%] mx-auto mt-[20px] flex flex-col gap-6">
          <p className="bg-gray-500 rounded-lg p-[20px] text-white sm:text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            architecto laudantium consectetur asperiores cum unde.
          </p>
          <p className="bg-gray-500 rounded-lg p-[20px] text-white sm:text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            architecto laudantium consectetur asperiores cum unde.
          </p>
        </div>
      </section>
      <section
        className={`w-[200px] gap-3 rounded-lg border bg-white/50 backdrop-blur-md h-[150px] sm:h-[100px] sm:w-[150px] sm:gap-2 fixed ${
          profile ? "top-[65px]" : "top-[-100%]"
        } right-[10px] z-10 flex flex-col items-center justify-center transition-all`}
      >
        <Link
          to="/profile"
          className="w-[50%] mx-auto flex sm:justify-center items-center"
        >
          <img
            src={user}
            className="h-[25px] sm:h-[18px] mr-4 sm:-translate-x-3"
            alt=""
          />
          <h4 className="sm:text-[12px] sm:-translate-x-3">Profile</h4>
        </Link>
        <button
          onClick={() => {
            setDisplay(!display);
          }}
          className="w-[50%] mx-auto flex sm:-translate-x-2 items-center relative"
        >
          <img src={settings} className="h-[25px] sm:h-[18px] mr-4" alt="" />
          <h4 className="sm:text-[12px]">Settings</h4>
          <ul
            id="settings"
            className={`absolute top-[50%] w-[200px] sm:w-[100px] p-1 ${
              display ? "block" : "hidden"
            } rounded-lg border bg-white/50 backdrop-blur-md  right-[154%] `}
          >
            <li className="mb-[10px] sm:mb-1 sm:text-[10px]">Update Profile</li>
            <li className="mb-[10px] sm:mb-1 sm:text-[10px]">
              Update Password
            </li>
            <li className="mb-[10px] sm:mb-1 sm:text-[10px]">
              Deactivate Account
            </li>
          </ul>
        </button>
        <Link
          to="/login"
          className="w-[50%] mx-auto flex sm:justify-center items-center"
        >
          <img src={logout} className="h-[25px] sm:h-[18px] mr-4" alt="" />
          <h4 className="sm:text-[12px]">Log Out</h4>
        </Link>
      </section>
      {/* Sidebar */}
      <section
        className={`w-[250px] h-screen bg-primary z-30 fixed ${
          sideBar ? "right-0" : "right-[-100%]"
        } flex justify-center pt-[80px] overflow-y-auto transition-all`}
      >
        <button
          onClick={() => {
            setSideBar(!sideBar);
          }}
        >
          <img
            src={close}
            className="h-[20px] absolute top-[20px] right-[20px]"
            alt=""
          />
        </button>
        <ul className="flex flex-col gap-[30px] text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/feature-profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setSideSubBar(!sideSubBar);
              }}
              className="relative flex items-center z-10"
            >
              Affliate Program
              <svg
                className="h-[12px] ml-[3px] fill-white rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                xmlSpace="preserve"
              >
                <path
                  id="XMLID_222_"
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
                />
              </svg>
            </button>
            <div
              className={`absolute ${
                sideSubBar ? "hidden" : "block"
              } transition-all z-50 left-[25px]`}
            >
              <ul
                className="w-[200px] flex flex-col gap-2 pt-[10px] text-center  pb-[10px]  bg-white rounded-lg text-primary z-10

              "
              >
                <Link to="/marriage-hall">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Marriage Hall
                  </li>
                </Link>
                <Link to="/marquee">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Marquee
                  </li>
                </Link>
                <Link to="/jewellers">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Jewellers
                  </li>
                </Link>
                <Link to="/caterers">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Caterers
                  </li>
                </Link>
                <Link to="/car-rental-service">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Car Rental Service
                  </li>
                </Link>
                <Link to="/decoration">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Decoration
                  </li>
                </Link>
                <Link to="/nikkah-khawan">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Nikkah Khawan
                  </li>
                </Link>
                <Link to="/event-planner">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Event Planner
                  </li>
                </Link>
                <Link to="/boutique">
                  <li className="w-full hover:bg-white hover:text-primary">
                    Boutique
                  </li>
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
