import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

function Service4() {
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
          fill="#1C274C"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 59 59"
          xml:space="preserve"
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
            <g>
              {" "}
              <path d="M46.5,0h-4h-26h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h3v3c0,0.553,0.447,1,1,1h2v15h-1c-0.553,0-1,0.447-1,1v4v1.809 c-1.842,1.064-3,3.036-3,5.191c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.155-1.158-4.127-3-5.191V26v-4c0-0.553-0.447-1-1-1h-1V6h8v35 h-1c-0.553,0-1,0.447-1,1v4v1.809c-1.842,1.064-3,3.036-3,5.191c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.155-1.158-4.127-3-5.191V46 v-4c0-0.553-0.447-1-1-1h-1V6h8v25h-1c-0.553,0-1,0.447-1,1v4v1.809c-1.842,1.064-3,3.036-3,5.191c0,3.309,2.691,6,6,6s6-2.691,6-6 c0-2.155-1.158-4.127-3-5.191V36v-4c0-0.553-0.447-1-1-1h-1V6h2c0.553,0,1-0.447,1-1V2h3c0.553,0,1-0.447,1-1S47.053,0,46.5,0z M18.5,23h2v2h-2V23z M23.5,33c0,2.206-1.794,4-4,4s-4-1.794-4-4c0-1.586,0.942-3.023,2.401-3.662 c0.363-0.159,0.599-0.519,0.599-0.916V27h2v1.422c0,0.397,0.235,0.757,0.599,0.916C22.558,29.977,23.5,31.414,23.5,33z M28.5,43h2 v2h-2V43z M33.5,53c0,2.206-1.794,4-4,4s-4-1.794-4-4c0-1.586,0.942-3.023,2.401-3.662c0.363-0.159,0.599-0.519,0.599-0.916V47h2 v1.422c0,0.397,0.235,0.757,0.599,0.916C32.558,49.977,33.5,51.414,33.5,53z M38.5,33h2v2h-2V33z M43.5,43c0,2.206-1.794,4-4,4 s-4-1.794-4-4c0-1.586,0.942-3.023,2.401-3.662c0.363-0.159,0.599-0.519,0.599-0.916V37h2v1.422c0,0.397,0.235,0.757,0.599,0.916 C42.558,39.977,43.5,41.414,43.5,43z M41.5,4h-24V2h24V4z"></path>{" "}
              <path d="M20.5,32v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2c-0.553,0-1,0.447-1,1s0.447,1,1,1h2c0.553,0,1-0.447,1-1 S21.053,32,20.5,32z"></path>{" "}
              <path d="M40.5,42v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2c-0.553,0-1,0.447-1,1s0.447,1,1,1h2c0.553,0,1-0.447,1-1 S41.053,42,40.5,42z"></path>{" "}
              <path d="M30.5,52v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2c-0.553,0-1,0.447-1,1s0.447,1,1,1h2c0.553,0,1-0.447,1-1 S31.053,52,30.5,52z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className="text-3xl font-primary sm:text-xl">Lights</h1>
      </motion.div>
      <div className="w-[90%] mt-[50px] mx-auto flex justify-between flex-wrap md:flex-wrap md:justify-around md:gap-4">
        <Card
          src="https://i.pinimg.com/originals/72/77/45/72774557ff3aac4e67e657ef88ab6c40.jpg"
          h="Roof Lights"
        />
        <Card
          src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/LED-Ceiling-Light-Design-33-Creative-Recessed-LED-Strip-Ceiling-Light-_pinterest_LEDstripChannel.jpg"
          h="Wall Lights"
        />
        <Card
          src="https://i.pinimg.com/1200x/56/2d/a0/562da0ee12eee5adfd7bce55b906db6c.jpg"
          h="Room Lights"
        />
        <Card
          src="https://wallsofneon.com/cdn/shop/products/d92e076f69cb1a6f81c9bab8cd8f57a2_c118eab6-edb7-4246-a9e6-63f841618878_600x.jpg?v=1619931181"
          h="Neon Lights"
        />
      </div>
    </div>
  );
}

export default Service4;
