import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Content from "./about-components/Content";
import Image from "./about-components/Image";
import Experience from "./about-components/Experience";

function About() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.8, 1], [0.6, 0.5, 0]);

  return (
    <motion.div
      ref={innerDivRef}
      className="h-auto w-full sm:h-auto bg-black text-white border-none sm:pt-[50px] overflow-hidden relative"
    >
      <div className="text-6xl">
        <motion.h1
          style={{ opacity }}
          className="font-third text-[130px] text-center text-gray-600 opacity-50 sm:text-[40px] top-[100px] w-full fixed -z-10"
        >
          ABOUT ME
        </motion.h1>

        <Content />
        <Image />
        <Experience />
      </div>
    </motion.div>
  );
}

export default About;
