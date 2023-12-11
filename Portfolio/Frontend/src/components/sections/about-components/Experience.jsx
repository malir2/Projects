import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Experience() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    ["70vw", "70vw", "40vw"]
  );
  const y = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.8],
    ["-10vh", "-40vh", "10vh"]
  );
  const opacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
  return (
    <motion.div style={{ x, y, opacity }} ref={innerDivRef}>
      <div className="flex flex-col gap-[10px]">
        <div className="text-2xl flex border border-primary rounded-lg bg-secondary/40 backdrop-blur-lg p-[10px] w-[300px] sm:w-[150px] sm:text-sm justify-between">
          <span className="text-primary font-primary text-lg">Experiance:</span>
          <span className="text-lg">1+</span>
        </div>
        <div className="text-2xl flex w-[300px] justify-between border border-primary rounded-lg bg-secondary/40 backdrop-blur-lg p-[10px] sm:w-[150px] sm:text-sm">
          <span className="text-primary font-primary text-lg">Clients:</span>
          <span className="text-lg">20+</span>
        </div>
        <div className="text-2xl flex w-[300px] justify-between border border-primary rounded-lg bg-secondary/40 backdrop-blur-lg p-[10px] sm:w-[150px] sm:text-sm">
          <span className="text-primary font-primary text-lg">Projects:</span>
          <span className="text-lg">12+</span>
        </div>
        <div className="text-2xl flex w-[300px] justify-between border border-primary rounded-lg bg-secondary/40 backdrop-blur-lg p-[10px] sm:w-[150px] sm:text-sm">
          <span className="text-primary font-primary text-lg">Awards:</span>
          <span className="text-lg">10+</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
