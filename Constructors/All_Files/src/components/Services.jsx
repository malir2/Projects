import React from "react";
import { motion } from "framer-motion";
import Service1 from "./services_components/Service1";
import Service2 from "./services_components/Service2";
import Service3 from "./services_components/Service3";
import Service4 from "./services_components/Services4";
import Service5 from "./services_components/Service5";

function Services() {
  return (
    <>
      <div className="h-[500px] w-full flex items-center relative bg-primary overflow-hidden">
        <div className="flex h-[300px] w-[90%] mt-[100px] mx-auto justify-between items-center gap-[20px]">
          <div>
            <motion.h1
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-white font-primary text-4xl"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-500"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ea
              ipsam aut ducimus dolorem voluptates velit cupiditate repellat
              totam aperiam.
            </motion.p>
          </div>
          <motion.img
            initial={{ y: "30vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            src="https://brightlineit.com/wp-content/uploads/2017/02/160207-Why-New-Buildings-Have-IT-Problems-RB-1024x535.jpg"
            alt=""
            className="h-[300px] lg:h-[60%] sm:hidden"
          />
        </div>
      </div>
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
    </>
  );
}

export default Services;
