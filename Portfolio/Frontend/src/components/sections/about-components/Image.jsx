import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import man from "../../../media/man.png";

function Image() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.4, 0.6], ["70vw", "5vw"]);
  const y = useTransform(scrollYProgress, [0.4, 0.6], ["-20vh", "20vh"]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.9], [1, 0]);
  return (
    <motion.div style={{ x, y, opacity }} ref={innerDivRef}>
      <img src={man} alt="" className="h-[500px] sm:h-[300px]" />
    </motion.div>
  );
}

export default Image;
