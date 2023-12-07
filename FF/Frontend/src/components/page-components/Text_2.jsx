import React from "react";
import { motion } from "framer-motion";
import { Parallax, Background } from "react-parallax";

function Text2() {
  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  };
  return (
    <div
      id="tech-specs"
      className="h-auto pt-[50px] bg-white z-10 overflow-hidden "
    >
      <motion.p
        initial={{ opacity: 0.3, y: "20vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-black w-[80%] mx-auto mt-[0px] text-center text-[40px] max-sm:text-[20px] font-bold font-primary"
      >
        Unleash your imagination without limits with Fusion Pro’s extraordinary
        battery life. Experience a whopping 40 hours of non-stop adventure on a
        single charge. From morning until night and beyond.
      </motion.p>
      <h1 className="text-[600px] max-sm:text-[300px] text-center font-bold flex justify-center">
        <motion.p
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          4
        </motion.p>
        <motion.p
          initial={{ x: "50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          0
        </motion.p>
      </h1>
      <div className="w-[80%] max-sm:mb-[50px] flex justify-around gap-[60px] max-sm:flex-col max-md:flex-wrap max-sm:gap-[40px]  items-center mx-auto">
        <div className="flex flex-col justify-center items-center">
          <svg
            className="w-[60px] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 58 24"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M 9.145 1.85 L 48.263 1.85 C 52.752 1.85 56.39 5.49 56.39 9.98 L 56.39 14.7 C 56.39 19.19 52.752 22.83 48.263 22.83 L 41.325 22.83 C 39.865 22.83 38.406 22.43 37.156 21.68 C 35.287 20.56 34.337 19.09 33.257 17.32 C 32.498 16.08 31.108 13.58 29.399 13.58 L 28.009 13.58 C 26.299 13.58 24.91 16.08 24.15 17.32 C 23.07 19.09 22.111 20.56 20.251 21.68 C 18.99 22.431 17.55 22.828 16.082 22.83 L 9.145 22.83 C 4.656 22.83 1.017 19.19 1.017 14.7 L 1.017 9.98 C 1.017 5.49 4.656 1.85 9.145 1.85"
              stroke="rgb(0,0,0)"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="transparent"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></motion.path>
          </svg>
          <p className="text-center text-[12px]">
            Fusion Pro XR Headset Unleash Total Immersion now.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            className="w-[60px] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 56 26"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M 17.65 1.7 L 49.22 1.7 C 51.94 1.7 54.14 3.9 54.14 6.62 L 54.14 20.07 C 54.15 22.79 51.94 24.99 49.22 24.99 L 6.52 24.99 C 3.8 24.99 1.6 22.79 1.6 20.07 L 1.6 6.62 C 1.6 3.9 3.8 1.7 6.52 1.7 L 17.65 1.7 L 17.65 24.99"
              stroke="rgb(0,0,0)"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="transparent"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></motion.path>
          </svg>
          <p className="text-center text-[12px]">
            Fusion Pro Leather Case Premium Protection with Style.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            className="w-[60px] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 48 36"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M 24.31 1.21 L 24.31 9.31 L 7.12 9.31 C 4.215 9.31 1.86 11.665 1.86 14.57 L 1.86 28.92 C 1.86 31.825 4.215 34.18 7.12 34.18 C 10.025 34.18 12.38 31.825 12.38 28.92 L 12.38 27.31 C 12.38 24.405 14.735 22.05 17.64 22.05 L 23.95 22.05 L 22.8 22.05 L 30.35 22.05 C 33.255 22.05 35.61 24.405 35.61 27.31 L 35.61 28.92 C 35.61 31.825 37.965 34.18 40.87 34.18 C 43.775 34.18 46.13 31.825 46.13 28.92 L 46.13 14.57 C 46.13 11.665 43.775 9.31 40.87 9.31 L 24.31 9.31"
              stroke="rgb(0,0,0)"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="transparent"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></motion.path>
          </svg>
          <p className="text-center text-[12px]">
            Fusion Pro Pad Enhanced Gaming Experience.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            className="w-[60px] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 39 32"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M 17.81 9.05 L 13.29 9.05 L 13.29 13.22 L 5.73 13.22 C 3.6 13.22 1.88 14.94 1.88 17.07 L 1.88 27.11 C 1.88 29.24 3.6 30.96 5.73 30.96 L 33.4 30.96 C 35.53 30.96 37.25 29.23 37.25 27.11 L 37.25 17.07 C 37.25 14.94 35.53 13.22 33.4 13.22 L 25.89 13.22 L 25.89 9.05 L 17.81 9.05 L 17.81 1.85 L 21.23 1.85 L 21.23 9.05"
              stroke="rgb(0,0,0)"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="transparent"
              pathLength="1"
              stroke-dashoffset="0px"
              stroke-dasharray="1px 1px"
            ></motion.path>
          </svg>
          <h1 className="text-center text-[12px]">
            Fusion Pro Charger Effortless Power, Always Ready.
          </h1>
        </div>
      </div>
      <div className="mt-[150px] h-[900px] max-sm:h-[300px] max-sm:hidden w-full relative">
        <Parallax
          bgImage="https://framerusercontent.com/images/ceeSxrtTl8R2LQpjsOl6MaM.webp"
          strength={300}
          className="absolute bg-cover w-full h-full max-sm:h-[300px]"
        ></Parallax>
      </div>
    </div>
  );
}

export default Text2;
