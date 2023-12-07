import React from "react";
import { motion } from "framer-motion";

function para() {
  return (
    <div className="h-auto pb-[30px] pt-[2px] bg-white z-10 overflow-hidden">
      <motion.p
        initial={{ opacity: 0.3, y: "20vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-black w-[80%] mx-auto mt-[0px] text-center text-[40px] max-sm:text-[20px] font-bold font-primary"
      >
        Welcome to the future of vision. The Fusion Pro XR headset establishes
        new standards in minimalist design and delivers an unparalleled virtual
        experience. Immerse yourself in a world full of possibilities and let
        your senses come alive.
      </motion.p>
    </div>
  );
}

export default para;
