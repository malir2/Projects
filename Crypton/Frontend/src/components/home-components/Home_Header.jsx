import React from "react";
import { motion } from "framer-motion";
import hero from "../../media/home-hero.png";

function Home_Header() {
  return (
    <div className="h-screen sm:h-auto md:h-[70vh] flex md:flex-col md:justify-center sm:justify-between items-center w-[90%] mx-auto justify-between overflow-hidden">
      <motion.div
        initial={{ x: "-60vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-[90px] sm:mt-[100px] md:mt-[400px]"
      >
        <div className="text-5xl sm:text-2xl md:text-3xl  text-black font-secondary">
          <p className="pb-[10px] font-extrabold">
            Invest In <span className="text-primary">Cryptocoin</span>
          </p>{" "}
          <p className="font-extrabold">Way To Trade</p>
        </div>
        <p className="pt-[20px] pb-[30px] text-gray-500">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
          <br /> doloremque laudantium, totam rem
        </p>
        <button className="text-white bg-primary font-secondary font-semibold h-[50px] w-[140px] rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_20px_29px_-17px_#16d5ffFF] p-2 ">
          LEARN MORE
        </button>
      </motion.div>
      <motion.div
        initial={{ x: "40vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.img
          animate={{
            y: [0, -10, 0],
            transition: {
              delay: 1.7,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          src={hero}
          alt=""
          className="h-[400px] sm:h-[250px] block mt-[90px] mr-[20px] sm:mr-[5px]"
        />
      </motion.div>
    </div>
  );
}

export default Home_Header;
