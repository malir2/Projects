import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import css from "../../media/css.png";
import php from "../../media/php.png";
import html from "../../media/html.png";
import c from "../../media/c++.png";

import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card";

function Free_Courses() {
  return (
    <Swiper
      className="p-6 w-[95%] sm:p-0"
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
        <Card img={css} name="CSS" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={html} name="HTML" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={php} name="Php" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={c} name="C++" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Free_Courses;
