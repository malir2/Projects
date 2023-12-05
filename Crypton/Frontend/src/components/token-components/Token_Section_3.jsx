import React from "react";
import { motion } from "framer-motion";
import chart from "../../media/token-chart.png";
import chart2 from "../../media/token-chart-2.png";

function Token_Section_3() {
  return (
    <div className="bg-white py-[50px]">
      <motion.h1
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="font-primary text-4xl font-bold text-center pt-[20px] md:text-2xl"
      >
        Token Distribution
      </motion.h1>
      <div className="flex w-[90%] mx-auto justify-between items-center mt-[80px] md:flex-col">
        <div className="w-[40%] md:w-[80%] flex flex-col justify-center items-center gap-[30px]">
          <motion.h1
            initial={{ x: "-40vh", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-primary text-primary font-bold"
          >
            Token Distribution
          </motion.h1>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true }}
            src={chart}
            alt=""
          />
        </div>
        <div className="w-[40%] md:w-[80%] flex flex-col justify-center items-center gap-[30px]">
          <motion.h1
            initial={{ x: "40vh", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-primary text-primary font-bold"
          >
            Use of Proceeds
          </motion.h1>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            viewport={{ once: true }}
            src={chart2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Token_Section_3;
