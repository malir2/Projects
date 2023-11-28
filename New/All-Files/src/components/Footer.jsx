import React from "react";
import logo from "../../images/log.png";
import email from "../../images/email.png";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-wrap flex-wrap  sm:flex-col">
          <div className="w-[30%] sm:w-full flex-shrink-0 md:mx-auto md:mb-[40px] mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
              <img src={logo} alt="" className="w-[150px]" />
            </a>
          </div>
          <div className="flex-grow flex justify-between sm:justify-around flex-wrap md:pl-20 sm:pl-0 mx-auto -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2  px-4 text-left">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10 sm:text-[10px]">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Profiles</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Favourite Profiles
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2  px-4 text-left">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Affiliate Program
              </h2>
              <nav className="list-none mb-10 sm:text-[10px]">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Marquees</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Rental Car
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Nikkah Khawan
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Marriage Hall
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Decoration
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Boutique</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Jewellers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Event Planner
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2  px-4 text-left">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Company Policies
              </h2>
              <nav className="list-none mb-10 sm:text-[10px]">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Private Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Picture Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Report Misuse
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Safety Tips
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-4 text-left">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Get in Touch with Us
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-2 sm:text-[8px]">
                <li>
                  <div className="flex gap-1 items-center">
                    <img src={email} alt="" className="h-[30px] sm:h-[15px]" />
                    <p>info@zoomitsolutions.pk</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1">
                    <img
                      src={whatsapp}
                      alt=""
                      className="items-center h-[30px] sm:h-[15px]"
                    />
                    <p>03086405555</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1">
                    <img
                      src={facebook}
                      alt=""
                      className="items-center h-[30px] sm:h-[15px]"
                    />
                    <p>United-proposal</p>
                  </div>
                </li>
                <li>
                  <div className="flex gap-1">
                    <img src="" alt="" />
                    <p></p>
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-300">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left sm:text-[8px]">
              United Proposals-
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @2023 All Rights Reserved powered by Zoom IT Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
