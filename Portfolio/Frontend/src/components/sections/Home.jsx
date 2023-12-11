import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isLightning, setLightning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setLightning(true);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  return (
    <>
      <motion.div
        ref={innerDivRef}
        style={{ opacity, scale }}
        transition={{ duration: 0.3 }}
        className="bg-black text-white  z-20 w-full h-screen text-center relative flex items-center justify-center top-0 overflow-hidden"
      >
        {isLightning && (
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              pointerEvents: "none",
            }}
          >
            <div
              className="relative w-[1800px] h-[1800px] rounded-full bg-gradient-to-r from-primary  shadow-2xl -z-10"
              style={{
                background: `radial-gradient(rgb(32, 201, 151,0.8), rgba(32, 201, 151,0.5),rgba(32, 201, 151,0.3), transparent 50%)`,
                transform: `translate(${cursorX - 880}px, ${cursorY - 880}px)`,
                opacity: 0.6,
              }}
            ></div>
          </div>
        )}

        <div className="text-white ">
          <p className="font-second text-center text-2xl mb-2 text-primary">
            Welcome
          </p>
          <p className="text-[60px] sm:text-[40px] font-primary text-center">
            <TypeAnimation
              sequence={[
                "I'm Muhammad Ali.",
                1000,
                "I'm a Frontend Developer.",
                1000,
                "I'm a React.js Developer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="text-center text-xl">based in Lahore,Pakistan.</p>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
