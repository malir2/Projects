import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Rating } from "flowbite-react";
import Footer from "./Footer";

function Marriage_Hall() {
  return (
    <div className="bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200">
      <Navbar />
      <section className="pt-[100px] pb-[50px]">
        <h1 className="text-4xl sm:text-2xl text-primary underline text-center font-bold">
          Caterers
        </h1>
        <section className="w-[90%] mx-auto flex justify-between sm:justify-center translate-y-[30px] flex-wrap">
          <Link className="">
            <div className="bg-white/50 backdrop-blur-xl w-[300px] sm:w-[240px] h-[400px] sm:h-[300px] rounded-lg shadow-[2px_2px_10px_6px_rgba(204,198,201,0.8)] overflow-hidden hover:scale-105 transition-all duration-100">
              <img
                src="https://venuehub.pk/wp-content/uploads/WhatsApp-Image-2023-08-28-at-2.40.36-PM-1.jpeg"
                alt=""
                className=" w-full h-[40%]"
              />
              <div className="p-[20px]">
                <h1 className="mt-[10px] font-bold text-lg sm:mt-[0px]">
                  Lake Mapourika
                </h1>

                <h3 className="text-sm text-gray-500 sm:text-[10px]">
                  Newzeland
                </h3>
                <div className="w-[180px]">
                  <Rating className="mt-[5px] sm:mt-0">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />
                    <p className="ml-2 text-[12px] font-medium text-gray-500 dark:text-gray-400">
                      4.95 out of 5
                    </p>
                  </Rating>
                </div>
                <p className="text-sm mt-[10px] sm:text-[10px] sm:mt-[5px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias explicabo sequi veritatis error ducimus quas
                  temporibus ab, eligendi commodi eum!
                </p>
              </div>
            </div>
          </Link>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Marriage_Hall;
