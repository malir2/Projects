import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Content() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.4, 0.6], ["50vw", "5vw"]);

  return (
    <motion.div style={{ x }} ref={innerDivRef} className="w-full h-auto">
      <div className="w-[600px] sm:w-[200px] z-50">
        <h1 className="font-primary text-3xl mb-[20px] sm:text-lg">
          I'm <span className="text-primary">Muhammad Ali</span>, a Web
          Developer
        </h1>
        <p className="text-gray-600 text-lg font-semibold sm:text-sm">
          I help you build brand for your business at an affordable price.
          Thousands of clients have procured exceptional results while working
          with our dedicated team. when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Delivering work within
          time and budget which meets client’s requirements is our moto. Lorem
          Ipsum has been the industry's standard dummy text ever when an unknown
          printer took a galley.
        </p>
      </div>
    </motion.div>
  );
}

export default Content;
