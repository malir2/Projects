import React from "react";
import { motion } from "framer-motion";

function Faq_Section() {
  const divVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7,
        when: "beforeChildern",
        staggerChildern: 0.3,
      },
    },
  };

  const childernVariant = {
    hidden: { opacity: 0, x: "-40vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        when: "beforeChildern",
        staggerChildern: 0.3,
      },
    },
  };
  const childernVariant2 = {
    hidden: { opacity: 0, x: "40vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.7,
        when: "beforeChildern",
        staggerChildern: 0.3,
      },
    },
  };

  return (
    <div className="w-full py-[50px] bg-white">
      <motion.div
        variants={divVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className="w-[90%] mx-auto flex justify-around flex-wrap gap-[20px] items-start"
      >
        <motion.div
          variants={childernVariant}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant2}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant2}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant2}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant2}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
        <motion.div
          variants={childernVariant2}
          className={`w-[40%] md:w-[90%] h-[54px] hover:h-[180px] transition-all duration-300 overflow-hidden p-4 shadow-[0px_0px_8px_0px_rgb(160,160,160)] scrollbar-thin`}
        >
          <h1 className="flex items-center justify-between font-secondary">
            <span>What is Crypto</span>
            <span>
              <svg
                width="24px"
                height="24px"
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
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </h1>

          <p
            className={` transition-all py-2 mt-[10px] text-gray-600 sm:text-[12px]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos quod voluptas id facilis quisquam ut, veniam asperiores
            dicta excepturi vel minima labore cumque ad repellat quas optio quis
            amet.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faq_Section;
