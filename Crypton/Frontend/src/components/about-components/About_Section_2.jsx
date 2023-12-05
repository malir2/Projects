import React from "react";
import circle from "../../media/circle.png";
import dots from "../../media/dots.png";
import { motion } from "framer-motion";

function About_Section_2() {
  const imageVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "-30vw" },
  };
  const contentVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "40vw" },
  };

  return (
    <div className="h-auto bg-white py-[50px] md:mt-[400px] sm:mt-[100px] sm:w-full overflow-hidden">
      <div>
        <div className="flex justify-around md:flex-col items-center overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[30%] md:w-[85%] relative h-[500px] sm:h-[300px]  flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              style={{ backgroundImage: `url(${dots})` }}
              className="w-[300px] h-[300px] z-20 sm:hidden sm:w-[0px] sm:h-[0px] overflow-hidden"
            ></motion.div>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                loop: "Infinity",
                repeat: "Infinity",
                ease: "linear",
              }}
              src={circle}
              alt=""
              className="absolute sm:w-[200px]"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
            transition={{ duration: 1 }}
            className="w-[35%] md:w-[90%] flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-2xl font-secondary font-semibold">
              We’ve built a platform to buy and sell shares.
            </h1>
            <p className="pt-[20px] text-sm sm:text-[10px] text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
            <ul className="mt-[20px]">
              <li className="flex text-sm text-gray-900 items-center gap-[10px] mb-[5px]">
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </li>
              <li className="flex text-sm text-gray-900 items-center gap-[10px] mb-[5px]">
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </li>
              <li className="flex text-sm text-gray-900 items-center gap-[10px] mb-[5px]">
                <span>
                  <svg
                    className="w-[30px] h-[30px] fill-primary"
                    fill="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                    </g>
                  </svg>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About_Section_2;
