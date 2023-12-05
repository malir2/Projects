import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import feature1 from "../../media/feature-1.png";
import feature2 from "../../media/feature-2.png";
import feature3 from "../../media/feature-3.png";
import feature4 from "../../media/feature-4.png";
import feature5 from "../../media/feature-5.png";
import feature6 from "../../media/feature-6.png";

function Feature_Section_1() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "40vh" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 1 }}
      className="h-auto bg-white py-[50px]"
    >
      <section className="w-[90%] mx-auto grid grid-cols-3 grid-rows-2 md:grid-cols-2 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-12 gap-[50px] sm:gap-[20px] md:gap-[70px] mt-[50px]">
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature1} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Safe & Secure
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature2} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Early Bonus
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature3} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Univarsal Access
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature4} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Secure Storage
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature5} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Low Cost
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: "60vh" }}
          initial={{ opacity: 0, y: "60vh" }}
          className="w-[300px] sm:w-[250px] mx-auto flex flex-col md:items-center justify-center"
        >
          <img src={feature6} alt="" className="w-[60px]" />
          <h1 className="font-primary text-2xl font-bold mt-[12px] sm:text-xl">
            Several Profit
          </h1>
          <p className="text-gray-500 mt-[10px] sm:text-sm md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
            eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
            labore et.Lorem ipsum dolor sit amet.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Feature_Section_1;
