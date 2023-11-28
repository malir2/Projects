import React from "react";
import Card from "./Card";
import i1 from "../../media/i1.jpg";
import i2 from "../../media/i2.jpg";
import i3 from "../../media/i3.jpg";
import i4 from "../../media/i4.jpg";
import { motion } from "framer-motion";

function Contracts() {
  return (
    <div className="h-screen lg:h-auto lg:p-[30px] lg:gap-[10px] bg-[#f1f1f1]  md:h-auto md:p-[30px] md:gap-[20px] flex justify-around items-center flex-col">
      <div className="w-[80%] overflow-hidden">
        <motion.h1
          initial={{ x: "-50vw", opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-primary text-4xl mb-[10px] md:text-3xl sm:text-xl"
        >
          Best Interior
        </motion.h1>
        <motion.p
          initial={{ x: "40vw", opacity: 0.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="md:text-base sm:text-[12px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          distinctio, doloribus sint quam eos quo illo repellat, ratione error
          voluptates provident repellendus beatae facere. Cum consequatur minima
          doloribus delectus voluptas!
        </motion.p>
      </div>
      <div className="flex justify-between w-[90%] lg:justify-center flex-wrap lg:gap-[20px] mx-auto">
        <Card src={i1} />
        <Card src={i2} />
        <Card src={i3} />
        <Card src={i4} />
      </div>
    </div>
  );
}

export default Contracts;
