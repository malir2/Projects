import React from "react";
import { motion } from "framer-motion";

function Start() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-150vh" }}
      transition={{ delay: 1.5, duration: 1.2, type: "tween" }}
      className="bg-black absolute top-0 w-full h-[800px] z-50 flex justify-center items-center"
    >
      <motion.h1
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-[50px] font-primary text-white mb-[200px]"
      >
        Initializing Fusion Pro.
      </motion.h1>
    </motion.div>
  );
}

export default Start;
