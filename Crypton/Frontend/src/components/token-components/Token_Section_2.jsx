import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Token_Section_2() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const divVariant = {
    hidden: { x: "-40vw", opacity: 0 },
    display: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const childernVariant = {
    hidden: { x: "-40vw", opacity: 0 },
    display: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="h-auto bg-white py-[50px] overflow-hidden">
      <div>
        <motion.div
          initial={{ opacity: 0, y: "40vh" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-center text-primary font-secondary sm:text-sm">
            TOKEN
          </h1>
          <h1 className="text-center sm:text-4xl text-gray-950 text-5xl font-secondary mt-[20px] font-extrabold">
            Token Sale
          </h1>
          <p className="text-center mt-[20px] text-gray-500 text-sm sm:text-[8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut enim ad minim veniam,
          </p>
        </motion.div>
      </div>
      <div className="flex mx-auto w-[90%] mt-[80px] justify-between items-center lg:flex-col lg:gap-8">
        <motion.div
          className="w-[40%] lg:w-[80%]"
          variants={divVariant}
          initial="hidden"
          whileInView="display"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl text-primary font-bold">
            Information About Tokens
          </h1>
          <ul className="mt-[30px] text-gray-500 font-primary md:text-[10px] xsm:text-[8px]">
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Token Name</span> <span>Cryptcon</span>
            </motion.li>
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Normal Price</span> <span>1smt = 0.025USD</span>
            </motion.li>
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Total Number of Token Produced</span> <span>7 BN smt</span>
            </motion.li>
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Unsold Tokens</span> <span>Burn Smart Contrac</span>
            </motion.li>
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Type of Token</span> <span>ERC-20</span>
            </motion.li>
            <motion.li
              variants={childernVariant}
              className="flex justify-between mb-2"
            >
              <span>Minimal transaction amount</span>{" "}
              <span>1 ETH/ 1 BTC/ 1 LTC</span>
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: "40vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-[50%] lg:w-[80%] h-[400px] md:h-[auto] md:py-[10px] bg-primary rounded-lg flex flex-col gap-[50px] md:gap-[5px]"
        >
          <div className="flex justify-center items-center gap-[30px] mt-[100px] md:mt-[30px] xsm:flex-col text-5xl md:text-xl md:gap-[5px] font-bold text-white font-primary">
            <span className="text-6xl md:text-2xl p-4 font-bold flex flex-col items-center justify-center gap-2">
              <h1>-{hours}</h1>{" "}
              <h1 className="text-sm font-light md:text-[10px]">HOURS</h1>
            </span>
            :
            <span className="text-6xl md:text-2xl p-4 font-bold flex flex-col items-center justify-center gap-2">
              <h1>-{minutes}</h1>
              <h1 className="text-sm font-light md:text-[10px]">MINUTES</h1>
            </span>
            :
            <span className="text-6xl md:text-2xl p-4 font-bold flex flex-col items-center justify-center gap-2">
              <h1>-{seconds}</h1>
              <h1 className="text-sm font-light md:text-[10px]">SECONDS</h1>
            </span>
          </div>
          <button className="text-white sm:text-sm bg-white/40 font-primary tracking-widest mx-auto font-bold w-auto p-4 sm:p-2 rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_6px_60px_-17px_#faf1f0]  ">
            JOIN & BUY TOKEN NOW
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Token_Section_2;
