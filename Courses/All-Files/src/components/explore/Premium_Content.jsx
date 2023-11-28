import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import Card from "../Card";
import angular from "../../media/Angular-bg.png";
import django from "../../media/django.jpg";
import rn from "../../media/react-native.png";
import website from "../../media/website-bg.jpg";
import wordpress from "../../media/wordpress.png";
import tailwind from "../../media/tailwind-bg.jpg";
import "swiper/css";
import "swiper/css/navigation";

function Premium_Content() {
  return (
    <Swiper
      className="p-6 w-[95%] sm:p-0"
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={40}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      navigation
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
      <SwiperSlide className="sm:w-full ease-linear">
        <Card img={tailwind} name="Tailwind CSS" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={angular} name="Angular" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={django} name="Django" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={rn} name="React Native" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={website} name="Web Developement" />
      </SwiperSlide>
      <SwiperSlide className="">
        <Card img={wordpress} name="WordPress" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Premium_Content;
