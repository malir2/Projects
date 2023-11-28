import React from "react";
import { motion } from "framer-motion";
import g1 from "../../media/g1.jpg";
import g2 from "../../media/g2.png";
import g3 from "../../media/g3.jpg";
import g4 from "../../media/g4.jpg";

function Gallery() {
  const divVariant = {
    hidden: {
      x: "-90vw",
      opacity: 0,
    },
    display: {
      x: "0vw",
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.1,
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={divVariant}
      initial="hidden"
      whileInView="display"
      className="h-screen w-full overflow-hidden md:h-auto md:p-[20px]"
    >
      <div className="flex justify-between items-center h-full md:justify-center">
        <div className="w-[40%] ml-[50px] md:w-[90%] md:ml-0">
          <motion.h1
            initial={{ y: "-4vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-4xl mb-[20px] font-primary md:text-3xl sm:text-xl"
          >
            Modern Styles
          </motion.h1>
          <motion.p
            initial={{ y: "10vh", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-secondary text-gray-900 md:text-[8px]"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            odit maiores, necessitatibus animi deleniti aperiam, laboriosam
            minima commodi magni quas voluptas qui? Aspernatur, dolore ex enim
            cum magni minus adipisci? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aliquid doloremque libero ullam labore nesciunt
            optio hic laudantium minus cum vero at, maxime id distinctio
            officiis saepe consectetur numquam, quam natus. Ipsa, esse
            perspiciatis fugiat, molestias sed nostrum consequuntur, quaerat
            nulla adipisci illo libero tempora nemo quis eos nam enim ea
            sapiente atque ut. Eos, fugit placeat. Sunt aut omnis maiores hic
            quaerat, id, vitae doloribus nam commodi est eligendi numquam nobis
            quae voluptas illum perferendis rerum! Quae deserunt distinctio enim
            repudiandae quos pariatur corrupti, ipsum, omnis placeat reiciendis
            ipsam maiores voluptatibus eaque, voluptate nostrum incidunt?
            Provident eligendi similique libero ullam!
          </motion.p>
        </div>
        <motion.div className="relative w-[50%] h-full flex items-center flex-wrap justify-center md:hidden">
          <motion.img
            initial={{ opacity: 0.3, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            src={g1}
            alt=""
            className="h-[200px] absolute rounded-lg shadow-[0px_0px_12px_3px_rgb(64,64,64)] bg-no-repeat"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            src={g2}
            alt=""
            className="h-[200px]  absolute top-[40px] left-[20px] rounded-lg shadow-[0px_0px_12px_3px_rgb(64,64,64)] bg-no-repeat"
          />
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            src={g3}
            alt=""
            className="h-[200px] absolute top-[50px] right-[40px] rounded-lg shadow-[0px_0px_12px_3px_rgb(64,64,64)] bg-no-repeat"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
            src={g4}
            alt=""
            className="h-[200px] absolute bottom-[50px] left-[40px] rounded-lg shadow-[0px_0px_12px_3px_rgb(64,64,64)] bg-no-repeat"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Gallery;
