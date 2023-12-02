import React from "react";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden relative hover:shadow-[0px_0px_8px_0px_rgb(0,0,0)] shadow-[0px_0px_4px_0px_rgb(0,0,0)] transition-all w-[270px] h-[350px] sm:w-[250px]"
      >
        <img
          src={props.src}
          alt=""
          className="h-full object-cover w-full hover:scale-110 transition-all"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className=""
      >
        {props.h}
      </motion.p>
    </div>
  );
}

export default Card;
