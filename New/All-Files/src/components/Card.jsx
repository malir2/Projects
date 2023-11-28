import React from "react";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import Lake from "../media/Lake_mapourika_NZ.jpeg";

function Card() {
  return (
    <div>
      <Link className="">
        <div className="bg-white/50 backdrop-blur-xl w-[300px] h-[400px] rounded-lg mx-auto translate-y-[30PX] shadow-[2px_2px_10px_6px_rgba(204,198,201,0.8)] overflow-hidden hover:scale-105 transition-all duration-100">
          <img src={Lake} alt="" className=" w-full h-[40%]" />
          <div className="p-[20px]">
            <h1 className="mt-[10px] font-bold text-lg">Lake Mapourika</h1>

            <h3 className="text-sm text-gray-500">Newzeland</h3>
            <div className="w-[180px]">
              <Rating className="mt-[5px]">
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
            <p className="text-sm mt-[10px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias explicabo sequi veritatis error ducimus quas temporibus
              ab, eligendi commodi eum!
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
