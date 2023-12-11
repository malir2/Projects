import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import graphic from "../../../media/graphic.png";

function Graphic() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    ["0", "-20vw", "20vw", "0"]
  );

  const y = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.5],
    ["50vh", "0vh", "50vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.4, 0.6, 0.8],
    ["-120vh", "0vh", "-20vh"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    ["0", "1", "1", "0"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [0, 1, 1, 0.5]
  );
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.4, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.1, 0.6, 0.8], [0, 1, 0]);
  return (
    <div
      ref={innerDivRef}
      className="flex h-[700vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[150px] md:h-screen overflow-hidden w-full flex md:block">
        <motion.img
          src={graphic}
          style={{ scale, opacity, x }}
          alt=""
          className="h-[300px] mx-auto md:h-[150px]"
        />
        <motion.div
          style={{ y, opacity: opacity2 }}
          className="absolute top-[70px] md:top-[120px] md:left-[30px] right-[150px] w-[350px] text-white"
        >
          <h1 className="text-primary font-primary text-3xl mb-2">
            Graphic Designing
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            cumque perferendis porro suscipit. Consectetur, eveniet fugit
            deserunt sint dolorem accusamus ad voluptatum neque. Debitis
            assumenda id ex. Voluptatibus, voluptate. Harum.
          </p>
        </motion.div>
        <motion.div
          style={{ y: y2, opacity: opacity3 }}
          className="absolute top-[70px] md:top-[250px] md:left-[40px] left-[150px] w-[350px] text-white"
        >
          <h1 className="text-primary font-primary text-3xl mb-2">I can do:</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            cumque perferendis porro suscipit. Consectetur, eveniet fugit
            deserunt sint dolorem accusamus ad voluptatum neque. Debitis
            assumenda id ex. Voluptatibus, voluptate. Harum.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Graphic;
