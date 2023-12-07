import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const [position, setPosition] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 1250) {
        setPosition(true);
      } else setPosition(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        // Scrolling down
        setScrollDirection("down");
      } else {
        // Scrolling up
        setScrollDirection("up");
      }

      setScrollY(currentScrollY);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  // Calculate scale based on scroll direction
  const scale = scrollDirection === "down" ? 0.6 : 1;

  return (
    <div id="intro" className="w-full">
      <div className="h-[1800px] relative">
        <motion.div
          className={` ${
            position ? "fixed bottom-[-30px]" : "absolute bottom-[-30px]"
          }  w-full transition-all`}
        >
          <h1
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.5s ease-in-out",
            }}
            className={`font-primary text-[210px] max-sm:text-[100px] 
            } font-bold -z-10 mt-[20px] text-center absolute top-[180px] max-sm:top-[30px] w-full transition-all`}
          >
            Fusion Pro
          </h1>
          <div className="h-[700px] z-20">
            <Spline scene="https://prod.spline.design/c9P3VQVSoyQzkU9s/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
