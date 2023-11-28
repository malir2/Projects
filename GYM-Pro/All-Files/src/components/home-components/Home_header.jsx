import React from "react";
import Navbar from "../Navbar";
import img1 from "../../media/protein-jar.png";

function Home_header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-600  w-[100%] h-screen lg:h-auto">
      <div className="w-[90%] mx-auto">
        <Navbar />
        <div className="flex justify-between items-center sm:flex-wrap">
          <div className="relative md:pt-12">
            <p className=" text-white font-semibold tracking-wide sm:text-sm">
              Your journey to a healthier life
            </p>
            <p className="mt-[3px] text-5xl font-bold text-red-600 md:text-3xl sm:text-xl">
              Get Your Protein From here
            </p>
            <p className="mt-2 text-gray-400 sm:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati{" "}
              vel consequuntur consequatur voluptate, quaerat asperiores?
            </p>
            <div className="flex md:flex-col mt-5">
              <input
                type="text"
                placeholder="Search....."
                className=" w-[400px] rounded-[22px] border-none pt-2 pb-2 pl-3 bg-gray-700 text-red-400 tracking-wider caret-red-600 sm:w-[80%]"
              />
              <button className="ml-4  bg-red-600 p-2 rounded-[22px] w-[100px] hover:scale-110 md:ml-0 md:mt-2 md:mb-2 sm:w-[80px] sm:text-sm">
                Search
              </button>
            </div>
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="w-[450px] transition-all ease-in-out hover:scale-105 hover:mb-2 sm:hidden"
            />
            <div className="shadow-[0_4px_20px_10px_rgba(0,0,0,0.3)] rounded"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home_header;
