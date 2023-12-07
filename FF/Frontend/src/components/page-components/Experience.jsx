import React from "react";
import video from "../../media/video.mp4";
import div from "../../media/div.jpg";
import man from "../../media/man.jpg";
import { motion } from "framer-motion";
import { Parallax, Background } from "react-parallax";

function Experience() {
  return (
    <div id="experience" className="overflow-hidden w-full h-full">
      <div className="w-full h-screen max-lg:h-auto relative flex justify-center items-center text-[38px] overflow-hidden">
        <video
          src={video}
          loop
          autoPlay
          muted
          className="absolute w-full -z-10"
        ></video>
        <motion.p
          initial={{ opacity: 0, y: "20vh", scale: 0.7 }}
          whileInView={{ opacity: 0.5, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-white font-primary z-10"
        >
          Fusing Realities
        </motion.p>
      </div>
      <div className="w-full h-auto py-[80px] bg-black flex justify-between max-lg:flex-col items-center overflow-hidden">
        <motion.img
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: 1.2 }}
          src="https://framerusercontent.com/images/7PFcaI9SqHmWV8wel17HQUWrFSs.png?scale-down-to=2048"
          alt=""
          className="h-[350px] max-sm:h-[200px]"
        />
        <div className="w-[35%] max-sm:w-[80%] mr-[20px] max-sm:mr-0">
          <h1 className="text-white text-2xl font-primary">Exquisite Craft </h1>
          <p className="text-gray-500 font-primary">
            Introducing the epitome of luxury in XR: an exquisitely designed
            headset inspired by aerospace engineering, featuring meticulously
            crafted anodized aluminum and the finest materials. Experience a new
            dimension of immersive technology where sophistication meets
            innovation.
          </p>
        </div>
      </div>
      <div className="w-full h-auto py-[80px] bg-black flex justify-between max-lg:flex-col items-center gap-[20px] px-[30px] max-sm:gap-[10px] max-sm:px-0 overflow-hidden">
        <div className="flex justify-center flex-col max-sm:w-[250px]  w-[500px]">
          <div className="w-[500px] h-[400px] flex justify-center items-center max-sm:w-[250px] max-sm:h-[200px] relative">
            <Parallax
              bgImage={div}
              strength={150}
              className="absolute w-[500px] h-[400px]"
            ></Parallax>
          </div>
          <motion.div
            initial={{ opacity: 0.3, y: "30vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ damping: 150, duration: 0.7 }}
          >
            <h1 className="text-white font-primary text-xl">Illumination </h1>
            <p className="text-gray-500 font-primary">
              Step into a world of light and wonder with the groundbreaking
              Fusion Pro XR Glasses. Feel the touch of light as it envelops you,
              immersing you in a breathtaking reality. Let the radiant
              possibilities captivate you as you discover a whole new dimension
              of entertainment and highlights.
            </p>
          </motion.div>
        </div>
        <div>
          <div className="max-sm:w-[250px] max-sm:h-[350px]  w-[769px] h-[512px] relative">
            <Parallax
              bgImage={man}
              strength={150}
              className="absolute w-full h-full"
            ></Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
