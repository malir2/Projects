import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import blog1 from "../../media/blog-1.jpg";
import blog2 from "../../media/blog-2.jpg";
import blog3 from "../../media/blog-3.jpg";

function Home_Section_7() {
  return (
    <div className="bg-white w-full h-auto py-[50px]">
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-center text-primary font-secondary sm:text-sm">
          News
        </h1>
        <h1 className="text-center sm:text-4xl text-gray-950 text-5xl font-secondary mt-[20px] font-extrabold">
          Our Blogs
        </h1>
        <p className="text-center mt-[20px] text-gray-500 text-sm sm:text-[8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </motion.div>
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          className="py-[50px] w-[90%] h-[550px] sm:h-[400px] mx-auto px-[20px]"
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
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
              slidesPerView: 2,
            },
            1040: {
              slidesPerView: 3,
            },
            840: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden">
                  <img
                    src={blog1}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    src={blog2}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    src={blog3}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    src={blog1}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    src={blog2}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="ease-linear">
            <Link>
              <div className="mx-auto w-[382px] h-[420px] sm:w-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-[0px_0px_3px_1px_rgb(162,162,162)] pb-[10px]">
                <div className="w-full h-[60%] overflow-hidden rounded-lg">
                  <img
                    src={blog3}
                    alt="..."
                    className="h-full w-full hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
                <div className="px-[10px]">
                  <h1 className="text-lg mt-[10px] sm:mt-[5px] sm:text-sm font-secondary">
                    Cryptocash is a clean, modern template clean
                  </h1>
                  <h2 className="text-[12px] sm:text-[8px] font-secondary text-primary ">
                    March 20,2021 | by John Doe
                  </h2>
                  <p className="mt-[10px] sm:mt-[3px] sm:text-[10px] text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do Lorem ipsum dolor sit amet, consectetur{" "}
                  </p>
                  <p className="text-primary underline font-secondary mt-[10px] sm:mt-[5px] sm:text-[10px]">
                    Read More
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Home_Section_7;
