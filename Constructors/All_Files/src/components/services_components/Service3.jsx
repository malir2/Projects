import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

function Service3() {
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
          viewBox="0 -12.98 122.88 122.88"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <defs></defs>
            <title>interior</title>
            <path
              fill="#1C274C"
              class="cls-1"
              d="M9.57,49a7.72,7.72,0,0,1-5.28.25,6.28,6.28,0,0,1-2.91-2A6.48,6.48,0,0,1,0,43.88a8.33,8.33,0,0,1,2-6.13H2a2.46,2.46,0,0,1,.28-.28L60.11.46A1.74,1.74,0,0,1,62.36.37l57.9,37h0a.93.93,0,0,1,.21.19,7.81,7.81,0,0,1,2.22,7.21,6.66,6.66,0,0,1-1.52,2.89,6.5,6.5,0,0,1-2.69,1.82,7.25,7.25,0,0,1-5.64-.37V96.79h-4.13V47.54c0-.84-43.5-27.13-47.1-29.93-3.81,2.9-47.91,29-47.91,30.07V96.91l-4.13,0V49Zm72.37,5.79H93.38l4,14.77H78l4-14.77ZM88.77,72V93.36H92a.86.86,0,0,1,0,1.71H83.38a.86.86,0,0,1,0-1.71h3.2V72ZM57.94,92.47V95H55.46V92.47H32.36V95H29.87V92.48H29a3.08,3.08,0,0,1-2.1-.63A2.82,2.82,0,0,1,26,89.63V74a7,7,0,0,1-1.81-.78,3.91,3.91,0,0,1-1.55-1.73,4.94,4.94,0,0,1,.75-5.78,5.66,5.66,0,0,1,2.14-1.39A5.82,5.82,0,0,1,28.07,64a5.17,5.17,0,0,1,1.85.48v-5.9c0-3.16.48-4.81,1.7-5.74s2.9-.93,5.5-.93H50.74c2.83,0,4.55.11,5.68,1.12s1.46,2.75,1.46,6v5.78a5.64,5.64,0,0,1,2.49-.53,6.05,6.05,0,0,1,2.39.5,5.38,5.38,0,0,1,2,1.4,4.63,4.63,0,0,1,.46,5.43,4.44,4.44,0,0,1-1.55,1.68,6.83,6.83,0,0,1-1.81.8V89.61h0a2.79,2.79,0,0,1-.89,2.21,3.08,3.08,0,0,1-2.1.63h-.89ZM31.45,65.6a5.38,5.38,0,0,1,1.1,2,5.93,5.93,0,0,1,.25,1.28,8.64,8.64,0,0,1,0,1.44v2H55V70.32a8.23,8.23,0,0,1,0-1.39,4.44,4.44,0,0,1,.3-1.35,5.58,5.58,0,0,1,1.06-1.71V59c0-2.75-.21-4.17-1-4.83s-2.2-.72-4.66-.72H37.12c-2.28,0-3.79,0-4.59.63s-1.08,1.89-1.08,4.52v7Zm1.35,8.32v2.57H55V73.92ZM28,65.49a4.57,4.57,0,0,0-1.9.27,3.54,3.54,0,0,0-2,5.12A2.53,2.53,0,0,0,25,72a5.92,5.92,0,0,0,1.92.74h0a.76.76,0,0,1,.6.74V89.6a1.37,1.37,0,0,0,.35,1.08A1.7,1.7,0,0,0,29,91h2.27V70.26a6,6,0,0,0,0-1.2,4.07,4.07,0,0,0-.19-1A3.49,3.49,0,0,0,28,65.49Zm28.59,7.44a.85.85,0,0,1,0,.23.93.93,0,0,1,0,.24v3.69a1.45,1.45,0,0,1,0,.34V90.94h2.27A1.83,1.83,0,0,0,60,90.68a1.48,1.48,0,0,0,.35-1.07h0V73.43a.77.77,0,0,1,.65-.76,5.69,5.69,0,0,0,1.86-.73,2.84,2.84,0,0,0,1-1.09,3.16,3.16,0,0,0-.24-3.74,4,4,0,0,0-1.41-1,4.89,4.89,0,0,0-1.81-.38,3.78,3.78,0,0,0-3.65,2.41,2.86,2.86,0,0,0-.18.89,7.19,7.19,0,0,0,0,1.22.17.17,0,0,1,0,.07h0v2.61Zm-23.75,18H55V78H32.8V90.94ZM98.67,3l14.27.58V22.8L98.67,16V3Z"
            ></path>
          </g>
        </svg>
        <h1 className="text-3xl font-primary sm:text-xl">Interior</h1>
      </motion.div>
      <div className="w-[90%] mt-[50px] mx-auto flex justify-between flex-wrap md:flex-wrap md:justify-around md:gap-4">
        <Card
          src="https://img.freepik.com/free-photo/living-room-with-blue-sofa-gold-coffee-table_123827-23877.jpg"
          h="Living Room"
        />
        <Card
          src="https://evolveindia.co/wp-content/uploads/2021/07/3_Go-Bold-Or-Go-Home-Modern-Bedroom-Interior-Design.jpg"
          h="Bed Room"
        />
        <Card
          src="https://media.designcafe.com/wp-content/uploads/2021/02/24214524/grey-kitchen-cabinets.jpg"
          h="Kitchen"
        />
        <Card
          src="https://i.pinimg.com/1200x/85/70/a0/8570a0b5b49edacad0266935f2fb6dd9.jpg"
          h="Bath"
        />
      </div>
    </div>
  );
}

export default Service3;
