import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

function Service5() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };

  const heading = {
    hidden: {
      x: "-40vw",
      opacity: 0.2,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-auto py-[50px]">
      <motion.div
        variants={heading}
        initial="hidden"
        whileInView="visible"
        className="flex items-center gap-[20px] mt-[20px] ml-[40px]"
      >
        <svg
          className="h-[50px] w-[50px] sm:w-[25px] sm:h-[25px]"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          fill="#1C274C"
          stroke="#1C274C"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>decoration</title>{" "}
            <g id="decoration">
              {" "}
              <line
                x1="9"
                y1="4"
                x2="9"
                y2="6"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <line
                x1="9"
                y1="10"
                x2="9"
                y2="12"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <line
                x1="5"
                y1="8"
                x2="7"
                y2="8"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <line
                x1="11"
                y1="8"
                x2="13"
                y2="8"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <path
                d="M32,52.106h0a5,5,0,0,1,5,5v6a0,0,0,0,1,0,0H27a0,0,0,0,1,0,0v-6a5,5,0,0,1,5-5Z"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></path>{" "}
              <line
                x1="34"
                y1="60.106"
                x2="34"
                y2="63.106"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <line
                x1="30"
                y1="57"
                x2="30"
                y2="63"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <circle
                cx="32"
                cy="50.106"
                r="2"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></circle>{" "}
              <line
                x1="32"
                y1="48.106"
                x2="32"
                y2="42.575"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <path
                d="M54.574,23.007a5.652,5.652,0,0,0-7.985,0l-1.866,1.867-4.238-4.238,2.144-2.143a5.84,5.84,0,0,0-.25-8.236,5.839,5.839,0,0,0-8.235-.25L32,12.151l-2.144-2.144a5.836,5.836,0,0,0-8.234.25,6.164,6.164,0,0,0-1.83,4.108,5.45,5.45,0,0,0,1.58,4.128l2.143,2.143L19.5,24.651l-1.644-1.644a5.644,5.644,0,1,0,0,7.986L19.5,29.349l4.014,4.014-2.142,2.142a5.449,5.449,0,0,0-1.58,4.127,6.278,6.278,0,0,0,5.937,5.938c.083,0,.164.005.245.005a5.423,5.423,0,0,0,3.882-1.585L32,41.847l2.144,2.143a5.423,5.423,0,0,0,3.882,1.585c.081,0,.162,0,.245-.005a6.169,6.169,0,0,0,4.108-1.83,5.838,5.838,0,0,0,.25-8.235l-2.143-2.142,4.237-4.237,1.866,1.867a5.647,5.647,0,0,0,7.985-7.986ZM36.265,12.128a2.844,2.844,0,0,1,3.993.25,2.845,2.845,0,0,1,.25,3.993l-2.144,2.144-4.243-4.243ZM32,16.393l4.243,4.243L32,24.878l-4.243-4.242Zm-8.507-.021a2.844,2.844,0,0,1,.25-3.994,2.843,2.843,0,0,1,3.992-.25l2.144,2.144-4.243,4.243Zm-7.758,12.5a2.646,2.646,0,1,1,0-3.744L17.607,27ZM21.393,27l4.243-4.243L29.879,27l-4.244,4.243ZM32,37.607l-4.244-4.244L32,29.12l4.244,4.243Zm-4.265,4.262a2.453,2.453,0,0,1-1.883.7A3.276,3.276,0,0,1,22.79,39.51a2.479,2.479,0,0,1,.7-1.884l2.142-2.142,4.243,4.243Zm12.773-4.243a2.845,2.845,0,0,1-.25,3.993,3.172,3.172,0,0,1-2.111.953,2.467,2.467,0,0,1-1.882-.7l-2.143-2.142,4.243-4.243Zm-2.143-6.384L34.121,27l4.243-4.242L42.606,27Zm14.088-2.37a2.651,2.651,0,0,1-3.743,0L46.839,27l1.871-1.872a2.647,2.647,0,1,1,3.743,3.744Z"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></path>{" "}
              <line
                x1="32"
                y1="7"
                x2="32"
                y2="11.422"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></line>{" "}
              <rect
                x="30"
                y="2.5"
                width="4"
                height="4"
                transform="translate(6.191 23.945) rotate(-45)"
                style={{
                  fill: "none",
                  stroke: "#1C274C",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2px",
                }}
              ></rect>{" "}
              <circle cx="55.239" cy="48.082" r="1.069"></circle>{" "}
              <circle cx="42.239" cy="51.082" r="1.069"></circle>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className="text-3xl font-primary sm:text-xl">Decoration</h1>
      </motion.div>
      <div className="w-[90%] mt-[50px] mx-auto flex justify-between flex-wrap md:flex-wrap md:justify-around md:gap-4">
        <Card
          src="https://m.media-amazon.com/images/I/612QHteoZ2S.jpg"
          h="Wall Decoration"
        />
        <Card
          src="https://m.media-amazon.com/images/I/61sfm+dWASL._AC_UF350,350_QL80_.jpg"
          h="Mirror Decoration"
        />
        <Card
          src="https://i.pinimg.com/originals/47/a9/54/47a9542b0152c27f29a20f9dbffbf6f8.jpg"
          h="Wood Decoration"
        />
        <Card
          src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/balcony-with-plants-balcony-min.jpg"
          h="Plants"
        />
      </div>
    </div>
  );
}

export default Service5;
