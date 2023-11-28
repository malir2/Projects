import React from "react";
import dymatize from "../../media/dymatize.png";
import opti from "../../media/opti.png";
import whey from "../../media/whey-zone.png";
import healthkart from "../../media/Healthkart.png";
import muscletech from "../../media/Muscletech.png";

function Brands() {
  return (
    <div className="bg-gradient-to-bl from-gray-800 via-gray-900 to-red-600 h-screen w-full lg:h-auto">
      <h1 className="pt-[40px] pb-[10px] w-[20%] mx-auto text-white text-4xl font-bold border-b-4 border-red-600 xl:w-[280px] text-center xsm:text-xl xsm:w-[60%]">
        Brands We Sell
      </h1>
      <div className="w-[70%] mx-auto mt-[80px] sm:mt-[10px] flex justify-around items-center flex-wrap">
        <img
          src={whey}
          alt=""
          className="w-[200px] transition-all hover:scale-x-105 sm:w-[100px]"
        />
        <img
          src={healthkart}
          alt=""
          className="h-[100px] transition-all hover:scale-105 sm:h-[50px]"
        />
        <img
          src={dymatize}
          alt=""
          className="w-[100px] transition-all hover:scale-105 sm:w-[80px]"
        />
        <img
          src={opti}
          alt=""
          className="w-[200px] transition-all hover:scale-105 sm:w-[100px]"
        />
        <img
          src={muscletech}
          alt=""
          className="w-[200px] transition-all hover:scale-105 mt-5 sm:w-[100px]"
        />
      </div>
    </div>
  );
}

export default Brands;
