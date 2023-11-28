import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import js from "../../media/js-logo.png";
import html from "../../media/html-logo.png";
import node from "../../media/node.png";
import angular from "../../media/angular-logo.png";
import css from "../../media/css-logo.png";
import react from "../../media/react-logo.png";
import vue from "../../media/vue-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Card_Slider() {
  return (
    <Swiper
      className="h-[200px] p-6 w-[95%] sm:px-[20px]"
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      autoplay={{ delay: 3000 }}
      breakpoints={{
        // when window width is >= 640px (md: breakpoint)
        370: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        280: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
        840: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide className="ease-linear">
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md dark:bg-gray-900/80 w-[300px] sm:w-[220px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">JavaScript</h1>
            <img
              src={js}
              alt="..."
              className="w-[50px] h-[50px] rounded-full drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">HTML</h1>
            <img
              src={html}
              alt="..."
              className="w-[50px] h-[50px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">CSS</h1>
            <img
              src={css}
              alt="..."
              className="w-[50px] h-[50px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">Angular</h1>
            <img
              src={angular}
              alt="..."
              className="w-[45px] h-[45px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">Node Js</h1>
            <img
              src={node}
              alt="..."
              className="w-[50px] h-[50px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">React Js</h1>
            <img
              src={react}
              alt="..."
              className="w-[50px] h-[50px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link>
          <div className="mx-auto bg-gray-100/80 backdrop-blur-md sm:w-[220px] dark:bg-gray-900/80 w-[300px] h-[150px] hover:scale-105 transition-all dark:border-gray-900 flex flex-col justify-between p-[20px] border cursor-pointer border-gray-100 dark:shadow-[2px_6px_8px_0px_rgb(32,32,32)] shadow-[2px_6px_8px_0px_rgb(162,162,162)] rounded-lg overflow-hidden">
            <h1 className="text-xl font-bold dark:text-gray-100">Vue</h1>
            <img
              src={vue}
              alt="..."
              className="w-[45px] h-[45px] drop-shadow-xl"
            />
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default Card_Slider;
