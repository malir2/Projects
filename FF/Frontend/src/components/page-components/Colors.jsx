import React from "react";
import { useState, useEffect } from "react";

function Colors() {
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsTransitioning(true);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Calculate scale and image visibility based on scroll position
  const scale = 0.4 + scrollY / 400; // You can adjust the divisor for the scaling speed

  return (
    <div
      id="colors"
      className={`flex items-center flex-col w-full h-screen  ${
        isTransitioning ? "overflow-hidden" : ""
      } bg-black pt-[100px] scrollbar-none`}
    >
      <h1
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.3s ease-in-out",
          color: "white",
        }}
        className="text-white font-primary text-center w-full mb-[200px]"
      >
        3 x Colors
      </h1>
      <div className="h-[300px] flex justify-center overflow-y-auto scrollbar-none w-full relative">
        <div
          className=" h-[1000px] sticky top-[20px]
        "
        >
          <div className="">
            <img
              src="https://framerusercontent.com/images/5TF4a47SEeHXhA6ezhft7TEUI.png?scale-down-to=1024"
              alt=""
              className={`h-[300px] `}
            />
            <img
              src="https://framerusercontent.com/images/syV1AbINMNvpiXupw85MkZlqTg.png?scale-down-to=1024"
              alt=""
              className={`h-[300px] `}
            />
            <img
              src="https://framerusercontent.com/images/n33rgxBGBzdjbkEp52S9tr33zRo.png?scale-down-to=1024"
              alt=""
              className={`h-[300px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colors;
