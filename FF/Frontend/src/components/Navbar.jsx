import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b h-[60px] flex justify-between items-center fixed w-full bg-white/80 backdrop-blur-lg z-40 overflow-hidden">
      <div className="">
        <h1 className="font-extrabold text-2xl ml-[40px] max-sm:text-[18px] max-sm:ml-[5px]">
          FF Product
        </h1>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-[20px] mr-[60px] text-[12px] max-sm:gap-2 max-sm:text-[8px] max-sm:mr-[10px] ">
          <Link to="/intro">
            <li className="hover:text-gray-500">Intro</li>
          </Link>
          <Link to="/experience">
            <li className="hover:text-gray-500">Experience</li>
          </Link>
          <Link to="/colors">
            <li className="hover:text-gray-500">Colors</li>
          </Link>
          <Link to="/tech-specs">
            <li className="hover:text-gray-500">Tech Specs</li>
          </Link>
          <li className="bg-black text-white p-1 max-sm:ml-2 max-sm:h-[25px] rounded-full ml-[20px] w-[70px] text-center h-[30px] hover:bg-white hover:text-black hover:border-black border transition-all">
            Buy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
