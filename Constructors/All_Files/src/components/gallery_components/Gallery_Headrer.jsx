import React from "react";
import { motion } from "framer-motion";

function Gallery_Headrer() {
  return (
    <div className="bg-secondary h-screen lg:h-[600px] md:h-[300px] flex items-center w-full overflow-hidden">
      <div className="relative h-[60%] w-full top-[40px] md:top-[20px]">
        <div className="absolute top-[30%] md:top-[15%] z-10 w-[60%] left-[200px] sm:left-[10px]">
          <motion.h1
            initial={{ x: "-80%", opacity: "0.3" }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-700 mb-[20px] sm:mb-[10px] text-sm md:text-[8px]"
          >
            CUSTOM ARTITECHTURAL DESIGN
          </motion.h1>
          <motion.p
            initial={{ x: "100%", opacity: "0.3" }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-2xl text-white font-secondary md:text-sm sm:text-[8px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            similique nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi, voluptatem?
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-white border px-3 py-2 mt-[30px] hover:bg-white hover:text-primary md:text-[8px] md:py-1 md:px-1 md:mt-[10px]"
          >
            Contact Now
          </motion.button>
        </div>
        <motion.img
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          src="https://roohome.com/wp-content/uploads/2016/07/attractive-accent-color-inspiration-for-dark-themed-homes.jpg"
          alt=""
          className="h-full w-[50%] absolute right-[30px] shadow-[0px_2px_8px_1px_rgb(32,32,32)] md:object-cover"
        />
      </div>
    </div>
  );
}

export default Gallery_Headrer;
