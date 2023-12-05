import React from "react";
import { motion } from "framer-motion";
import feature7 from "../../media/feature-7.png";

function Features_Section_2() {
  const contentVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: {
      opacity: 0,
      x: "40vw",
      transition: {
        delay: 0.3,
        duration: 0.7,
      },
    },
  };
  return (
    <div className="bg-third py-[40px]">
      <div className="flex w-[90%] mx-auto overflow-hidden mt-[10px] justify-around items-center lg:flex-col-reverse">
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.img
            initial={{
              x: "-40xw",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.7,
              },
            }}
            viewport={{ once: true }}
            src={feature7}
            alt=""
            className="h-[400px] sm:h-[250px] block mt-[90px] mr-[20px] sm:mr-[5px]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
          transition={{ duration: 1 }}
          className="w-[45%] md:w-[90%] flex flex-col justify-center"
        >
          <h1 className="text-3xl sm:text-2xl font-secondary font-semibold">
            Why Choose Us?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </li>
          </ul>
          <button className="text-white bg-primary font-semibold h-[44px] w-[127px] mt-[10px] rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_20px_29px_-17px_#16d5ffFF]  ">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Features_Section_2;
