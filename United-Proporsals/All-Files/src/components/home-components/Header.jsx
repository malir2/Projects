import React from "react";

function Header() {
  return (
    <div className="bg-[url('../../images/hero.jpg')] w-[100%] h-[500px] sm:h-[300px] relative bg-cover sm:bg-center sm:bg-cover sm:bg-no-repeat  ">
      <div className="text-black w-full bg-black/60 backdrop-blur-sm  flex absolute h-[100%] flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-white z-0 sm:text-2xl">
          UNITED PROPOSALS
        </h1>
        <h3 className="text-gray-400 mt-[10px] text-xl sm:text-sm">
          WE ARE GETTING MERRIAGE
        </h3>
      </div>
    </div>
  );
}

export default Header;
