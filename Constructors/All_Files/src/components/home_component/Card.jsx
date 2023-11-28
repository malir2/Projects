import React from "react";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0.2 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
        damping: 20,
      }}
      className="hover:shadow-[0px_0px_8px_0px_rgb(0,0,0)] shadow-[0px_0px_4px_0px_rgb(0,0,0)] transition-all w-[270px] h-[350px]"
    >
      <img src={props.src} alt="" className="h-full object-cover w-full" />
    </motion.div>
  );
}

export default Card;
