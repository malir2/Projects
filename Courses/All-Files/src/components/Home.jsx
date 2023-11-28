import React from "react";
import { Banner } from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import hero from "../media/hero.png";
import Courses_For_You from "./home-content/Courses_For_You";
import Free_Courses from "./home-content/Free_Courses";

function Home() {
  return (
    <>
      <Banner>
        <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                <MdPercent className="h-4 w-4" />
              </span>
              <span className="flex gap-1">
                Get 5% commision per sale&nbsp;
                <a
                  href="https://flowbite.com"
                  className="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex dark:text-primary text-indigo-500"
                >
                  Become a partner
                  <HiArrowRight className="ml-2" />
                </a>
              </span>
            </p>
          </div>
          <Banner.CollapseButton
            color="gray"
            className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
          >
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>
      <div className="w-full bg-green-200  dark:bg-gray-800">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-[50px] py-[20px] justify-around items-center">
            <div>
              <h1 className="text-6xl font-bold text-secondary dark:text-primary">
                Welcome, M!
              </h1>
              <p className="dark:text-gray-400 text-primary w-10/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, in eligendi at quam veritatis eveniet tempora
                tenetur ex veniam vitae?
              </p>
            </div>
            <div className="w-[500px] hover:scale-110 transition-all">
              <img src={hero} alt="" className="drop-shadow-xl" />
            </div>
          </div>
        </section>
        <Courses_For_You />
        <Free_Courses />
      </div>
    </>
  );
}

export default Home;
