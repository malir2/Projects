import React from "react";
import bg from "../../media/home_bg.jpg";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className=" w-full overflow-hidden">
      <div className="relative top-0">
        <motion.img
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
          src={bg}
          alt=""
          className="w-full object-cover"
        />
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "tween",
          }}
          className="absolute top-0 bg-black/50 w-full h-full flex justify-center flex-col"
        >
          <div className="ml-[50px] sm:mt-[40px] sm:ml-[20px]">
            <motion.h1
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "tween" }}
              className="text-5xl font-primary text-white sm:text-[16px] md:text-3xl sm:text-sm"
            >
              Build Your Home With Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: "tween" }}
              className="text-gray-200 mt-[20px] sm:text-[6px] sm:mt-[10px]"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              aspernatur dolorem quas perspiciatis tempora doloremque quos
              aperiam sed, maiores amet.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
