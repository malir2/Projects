import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Service1() {
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
        <motion.svg
          className="w-[50px] h-[50px] sm:w-[25px] sm:h-[25px]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <motion.path
              variants={icon}
              initial="hidden"
              whileInView="visible"
              d="M22 22L2 22"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M4 22V9.5"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M20 9.5V13.5M20 22V17.5"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></motion.path>{" "}
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
              stroke="#1C274C"
              stroke-width="1.5"
            ></motion.path>{" "}
          </g>
        </motion.svg>
        <h1 className="text-3xl font-primary sm:text-xl">Construction</h1>
      </motion.div>
      <div className="w-[90%] mt-[50px] mx-auto flex justify-between flex-wrap md:flex-wrap md:justify-around md:gap-4">
        <Card
          src="https://www.mydomaine.com/thmb/bepet4VMGUG70sCLFNQRdZm9bbg=/2048x0/filters:no_upscale():strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
          h="Furnished"
        />
        <Card
          src="https://lh3.googleusercontent.com/YFa-f0a1kOiU0eEX6Q1dw6i8E1wMOyZUrQwI-zd8Na4-WIx1oqEdfW8jbUeGBFyRtXsYhPE6FwWH5NUqUeWzHsS48SaMNA9ZWg=w640-h426-n-rj-l90"
          h="Apartments"
        />
        <Card
          src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/10/13/2/CI_Wheelhaus-wedge-tiny-house-exterior.jpg.rend.hgtvcom.1280.960.suffix/1444782838108.jpeg"
          h="Huts"
        />
        <Card
          src="https://www.idesignarch.com/wp-content/uploads/Mediterranean-Style-Modern-Estate-New-Mexico_1.jpg"
          h="Luxury"
        />
      </div>
    </div>
  );
}

export default Service1;
