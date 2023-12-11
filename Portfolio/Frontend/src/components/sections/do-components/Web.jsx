import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import web from "../../../media/web.png";
import work from "../../../media/work1.png";
import html from "../../../media/html.png";
import js from "../../../media/js.png";
import css from "../../../media/css.png";
import react from "../../../media/react.png";
import tailwind from "../../../media/tailwind.png";
import redux from "../../../media/redux.png";

function Web() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4],
    ["0", "-20vw", "-100vw"]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 0.1, 0.8],
    ["120vw", "60vw", "-60vw"]
  );
  const x3 = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.7, 0.9],
    ["45vw", "45vw", "-5vw", "-120vw"]
  );
  const x4 = useTransform(scrollYProgress, [0.4], ["55vw"]);
  const y = useTransform(scrollYProgress, [0, 0.2], ["-50vh", "-50vh"]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], ["0vh", "-86vh"]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.8], ["-100vh", "-140vh"]);
  const scale = useTransform(scrollYProgress, [0, 0.1], ["1", "1.2"]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.9], [1, 1]);

  return (
    <motion.div
      ref={innerDivRef}
      className="flex h-[700vh] flex-col items-center justify-start"
    >
      <motion.div className="sticky top-[-100px] md:top-[50px] px-16 mb-[30px] h-auto pb-[300px] w-full overflow-hidden">
        <motion.img
          style={{ x, scale }}
          src={work}
          className="h-[400px] md:h-[200px] sm:h-[150px] mx-auto mt-[200px] sm:mt-[100px] transition-all"
          alt=""
        />
        <motion.div
          style={{ x: x2, y }}
          className="w-[450px] md:mt-[300px] md:w-[300px] "
        >
          <img src={web} className="h-[70px]" alt="" />
          <h1 className="text-primary text-[30px] md:text-xl font-primary mt-2">
            Frontend Web Developer
          </h1>
          <p className="pt-[20px] text-gray-500 md:text-[12px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            illo placeat iure eum id quam. Ea, repudiandae excepturi temporibus
            accusamus enim suscipit consequuntur architecto explicabo, unde,
            asperiores dolores cum porro.
          </p>
        </motion.div>
        <motion.div
          style={{ x: x3, y: y2, opacity: opacity2 }}
          className="grid grid-cols-3 grid-rows-2 md:mt-[300px] md:ml-[150px] md:gap-[20px] sm:gap-[10px] gap-[50px] w-[600px] md:w-[300px] sm:w-[200px] bg-gray-700/50 backdrop-blur-lg p-[30px] rounded-lg border-primary border shadow-[0px_0px_20px_0px_#20c997]"
        >
          <img
            src={html}
            className="h-[70px] md:h-[40px] mx-auto sm:h-[20px]"
            alt=""
          />
          <img
            src={css}
            className="h-[70px] md:h-[40px] mx-auto  sm:h-[20px]"
            alt=""
          />
          <img
            src={js}
            className="h-[70px] md:h-[40px] mx-auto  sm:h-[20px]"
            alt=""
          />
          <img
            src={react}
            className="h-[70px] md:h-[40px] mx-auto  sm:h-[20px]"
            alt=""
          />
          <img
            src={tailwind}
            className="h-[70px] md:h-[40px]  mx-auto  sm:h-[20px]"
            alt=""
          />
          <img
            src={redux}
            className="h-[70px] md:h-[40px] mx-auto  sm:h-[20px]"
            alt=""
          />
        </motion.div>
        <motion.div
          style={{ opacity, y: y3, x: x4 }}
          className="md:mt-[250px] sm:mt-[300px] md:ml-[-50px] sm:ml-[-150px]"
        >
          <h1 className="text-primary text-[30px] font-primary mt-2 md:text-xl sm:text-lg">
            Technologies:
          </h1>
          <p className="pt-[20px] md:pt-1 text-gray-500 w-[500px] md:w-[250px] md:text-[12px] sm:text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            harum. Id perspiciatis, porro odit nisi esse eligendi nesciunt
            laborum reprehenderit. Officiis, laborum unde! Voluptas voluptates,
            illum aspernatur natus quos exercitationem. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsum, tenetur!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Web;
