import React from "react";
import { Carousel } from "flowbite-react";
import strawberry from "../../media/strawberry.png";
import proteinJar from "../../media/protein-jar-2.png";
import berry from "../../media/berry.png";
import blueberry from "../../media/blueberry.png";
import nitro_tech from "../../media/nitro_tech.png";

function Home_latest_products() {
  return (
    <div className="w-full h-screen bg-gradient-to-bl from-red-600 via-gray-800 to-gray-900 lg:h-auto">
      <div className="flex justify-around sm:flex-wrap items-center h-full lg:pt-[100px] lg:pb-[100px] ">
        <div className="w-[40%] md:ml-4 sm:w-[90%]">
          <h1 className="mb-[20px] pb-[10px] text-white text-4xl font-bold border-b-4 border-red-600 md:text-4xl">
            Latest Products
          </h1>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            temporibus odit. Ut quibusdam dicta a deserunt optio. Voluptatem
            quod porro fugit similique soluta. Veritatis numquam est odit ipsum
            aliquid corporis officia vitae. Porro ad quos quam eos ipsam. Beatae
            a ducimus fugit nihil ipsum exercitationem et modi recusandae!
            Nesciunt neque nemo earum qui corrupti amet libero dignissimos quia
            animi saepe ipsum repudiandae natus, doloremque ex enim voluptatem
            magni quo similique debitis fugit! Doloremque, eligendi. Beatae
            enim, fuga cumque quod harum repellat nihil eaque placeat, vitae
            iure doloremque nulla adipisci mollitia.
          </p>
        </div>
        <Carousel
          indicators={false}
          className="w-[500px] h-[400px] sm:w-[300px] sm:h-[200px] sm:mt-[50px]"
        >
          <img
            src={proteinJar}
            alt="..."
            className="w-[400px] hover:scale-105 transition-all ease-in-out sm:w-[90%]"
          />
          <img
            src={blueberry}
            alt="..."
            className="w-[400px] hover:scale-105 transition-all ease-in-out sm:w-[70%]"
          />
          <img
            src={strawberry}
            alt="..."
            className="w-[400px] rotate-12 hover:scale-105 transition-all ease-in-out sm:w-[70%]"
          />
          <img
            src={berry}
            className="w-[400px] hover:scale-105 transition-all ease-in-out sm:w-[70%]"
            alt="..."
          />
          <img
            src={nitro_tech}
            alt="..."
            className="w-[400px] hover:scale-105 transition-all ease-in-out sm:w-[70%]"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Home_latest_products;
