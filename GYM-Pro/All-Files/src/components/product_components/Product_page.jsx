import React from "react";
import { Carousel } from "flowbite-react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import blueberry from "../../media/blueberry.png";
import strawberry from "../../media/strawberry.png";
import berry from "../../media/berry.png";
import protein_jar_2 from "../../media/protein-jar-2.png";
import heart from "../../media/heart.png";
import chat from "../../media/chat.png";
import close from "../../media/close.png";

function Product_page() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-600 flex justify-center items-center">
      <Link to="/products">
        <img
          src={close}
          alt=""
          className="absolute top-8 right-8 h-[28px] lg:top-4 lg:right-4"
        />
      </Link>
      <div className="w-[70%] h-[90%] flex lg:flex-wrap relative shadow-2xl">
        <div className="w-[40%] lg:w-[100%] lg:h-[40%] bg-gray-800">
          <Carousel indicators={false}>
            <img
              src={protein_jar_2}
              alt="..."
              className="hover:scale-110 transition-all lg:w-[70%]"
            />
            <img
              src={strawberry}
              alt="..."
              className="hover:scale-110 transition-all lg:w-[70%]"
            />
            <img
              src={berry}
              alt="..."
              className="hover:scale-110 transition-all lg:w-[70%]"
            />
            <img
              src={blueberry}
              alt="..."
              className="hover:scale-110 transition-all lg:w-[70%]"
            />
          </Carousel>
        </div>
        <div className="relative w-[60%] lg:w-[100%] ">
          <div className="ml-[50px] lg:ml-[10px]">
            <div className="border-l-8 border-red-600 mt-[10%] lg:mt-[10px] h-[80px] sm:h-[50px] lg:h-[60px] w-[80%] flex items-center">
              <div className="pl-7 flex gap-10 sm:gap-3 xsm:gap-2 sm:pl-2">
                <div>
                  <p className="text-center text-white font-semibold text-2xl sm:text-sm lg:text-lg xsm:text-[12px]">
                    24
                  </p>
                  <h1 className="text-2xl font-bold text-red-600 sm:text-lg lg:text-xl xsm:text-[14px]">
                    Likes
                  </h1>
                </div>
                <div>
                  <p className="text-center text-white font-semibold text-2xl sm:text-sm lg:text-lg xsm:text-12px">
                    12
                  </p>
                  <h1 className="text-2xl font-bold text-red-600 sm:text-lg lg:text-xl xsm:text-[14px]">
                    Sell
                  </h1>
                </div>
                <div>
                  <p className="text-center text-white font-semibold text-2xl sm:text-sm lg:text-lg">
                    50
                  </p>
                  <h1 className="text-2xl font-bold text-red-600 sm:text-lg lg:text-xl xsm:text-[14px]">
                    Boxes
                  </h1>
                </div>
                <div>
                  <p className="text-center text-white font-semibold text-2xl sm:text-sm lg:text-lg">
                    20
                  </p>
                  <h1 className="text-2xl font-bold text-red-600 sm:text-lg lg:text-xl xsm:text-[14px]">
                    Remain
                  </h1>
                </div>
              </div>
            </div>
            <p className="w-[90%] mt-[60px] text-gray-400 lg:w-[100%] lg:text-[12px] sm:text-[10px] lg:mt-[20px] xsm:text-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              blanditiis ad quaerat esse id, facilis sapiente. Ad eligendi dolor
              et expedita, sed vero aperiam corporis iusto totam harum, illum
              delectus nam ab doloremque dolorem perferendis sequi blanditiis
              similique? Vitae, obcaecati? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sit, veniam?
            </p>
            <div className="flex mt-4 items-center sm:mt-2">
              <h3 className="text-red-600 font-semibold text-lg lg:text-sm sm:text-[10px]">
                Flavours:
              </h3>
              <p className="ml-2 text-md text-gray-400 sm:text-[10px] lg:text-sm xsm:text-[10px]">
                Chocolate, Strawberry, Blueberry, Berry & Cream
              </p>
            </div>
            <h1 className="mt-[20px] text-3xl text-white font-bold sm:text-xl lg:text-lg lg:mt-[5px]">
              MTN OPS Protein
            </h1>
            <p className="text-gray-400 mb-1 sm:text-sm lg:text-sm">
              Rs 7000/-
            </p>
            <div className="flex items-center ">
              <Rating className="xsm:w-[100px]">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />

                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-xs xsm:text-[8px]">
                  4.95 out of 5
                </p>
              </Rating>
              <img
                src={heart}
                alt=""
                className="ml-4 h-[20px] sm:ml-2 xsm:h-[12px]"
              />
              <img src={chat} alt="" className="ml-2 h-[20px] xsm:h-[12px]" />
            </div>
            <div className="flex gap-2 mt-7 sm:mt-2 lg:mt-1">
              <button className="bg-red-600 p-2 rounded-[22px] w-[120px] hover:scale-110 sm:w-[80px] sm:text-xs sm:h-[30px]">
                Buy Now
              </button>
              <button className="bg-gray-900 text-red-600 p-2 rounded-[22px] w-[120px] hover:scale-110 sm:w-[80px] sm:h-[30px] sm:text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_page;
