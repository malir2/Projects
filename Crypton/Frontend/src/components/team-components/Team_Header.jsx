import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Team_Header() {
  return (
    <div className="w-[100%] h-[60vh] bg-third/70 flex justify-center items-center">
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl text-gray-800 font-secondary font-extrabold mt-[60px]">
          Team
        </h1>
        <h3 className="text-sm text-gray-400 font-secondary font-extrabold mt-[30px]">
          <Link to="/" className="hover:text-primary">
            HOME
          </Link>{" "}
          / Team
        </h3>
      </motion.div>
    </div>
  );
}

export default Team_Header;
