import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Web from "./do-components/Web";
import Graphic from "./do-components/Graphic";

function What_I_Do() {
  return (
    <div className="w-full bg-black h-auto relative">
      <div className="text-6xl">
        <motion.h1 className="font-third text-[130px] text-center text-gray-600 opacity-50 sm:text-[40px] w-full  z-0">
          WHAT I DO
        </motion.h1>
      </div>
      <div className="w-full">
        <Web />
      </div>
      <div className="w-full">
        <Graphic />
      </div>
    </div>
  );
}

export default What_I_Do;
