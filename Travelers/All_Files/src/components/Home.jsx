import React, { useState } from "react";
import bgVideo from "../media/traveler-bg.mp4";
import instagram from "../media/instagram.png";
import facebook from "../media/facebook.png";
import whatsapp from "../media/whatsapp.png";
import twitter from "../media/twitter.png";
import hamburger from "../media/hamburger.png";
import close from "../media/close.png";

function Home() {
  return (
    <div>
      <div className="relative">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          className="w-full h-auto"
        ></video>

        <header className="absolute top-0 left-0 w-full h-full bg-[rgb(49,104,187)]/60">
          <nav className="flex justify-between items-center w-full h-[80px] z-10 border-b border-gray-300 max-sm:h-[40px]">
            <p className="text-[48px] mb-3 font-agbalumo font-bold text-white ml-3 max-sm:text-[18px] max-xsmall:text-[16px] max-sm:mb-0">
              Travelers
            </p>

            <div className="max-[1292px]:hidden">
              <ul className="flex justify-between items-center w-[450px] text-[18px] font-semibold  text-white">
                <li>
                  <a className="hover:text-[rgb(45,116,223)]" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-[rgb(45,116,223)]" href="">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-[rgb(45,116,223)]" href="">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-[rgb(45,116,223)]" href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              {/* Hamburger icon */}
              <div className="hidden max-[1292px]:block">
                <button className="border w-[45px] h-[45px] mr-4 bg-[rgb(45,116,223)] flex justify-center items-center p-2 rounded-lg max-sm:w-[30px] max-sm:h-[30px] max-sm:mr-1">
                  <img src={hamburger} alt=" " className="w-[30px]" />
                </button>
              </div>

              <button className="border border-[rgb(45,116,223)] bg-[rgb(45,116,223)] mr-6 rounded-3xl w-[120px] h-[50px] shadow-sm text-white hover:text-[rgb(45,116,223)] hover:bg-white hover:border-white hover:shadow-2xl ease-in-out hover:scale-[105%] max-sm:w-[80px] max-sm:h-[30px] max-sm:text-[10px] max-sm:mr-1">
                Contact Now
              </button>
            </div>
          </nav>

          <div className="mt-[180px] ml-[100px] max-[945px]:mt-[80px] max-sm:mt-[10px] max-sm:ml-[20px]">
            <h1 className="font-Merriweather font-bold text-white text-[60px] max-[945px]:text-[38px]  max-[727px]:text-[28px] max-sm:text-[18px] max-xsmall:text-[14px]">
              Start Your Journey With us
            </h1>
            <p className="text-white mr-[50px] text-[18px] max-lg:text-[14px]  max-sm:text-[6px] max-xsmall:text-[6px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              nulla optio minima! Quo, veritatis! Ratione iure voluptas, natus
              fugiat harum provident itaque, consequuntur eveniet nobis omnis
              voluptatum error debitis! Minus?
            </p>

            <input
              type="text"
              placeholder="Find Your Favourite Place"
              className="mt-[20px] w-[600px] border-none rounded-[20px] pt-[7px] pb-[7px] pl-[25px] max-[855px]:w-[300px] max-sm:w-[200px] max-sm:text-[10px] max-sm:pt-1 max-sm:pb-1 max-sm:mt-1 max-sm:h-[20px]"
            />
            <button className="border border-[rgb(45,116,223)] bg-[rgb(45,116,223)] mr-6 rounded-3xl w-[120px] h-[40px] ml-2 shadow-sm text-white hover:text-[rgb(45,116,223)] hover:bg-white hover:border-white hover:shadow-2xl ease-in-out hover:scale-[105%] max-sm:w-[80px] max-sm:h-[20px] max-sm:text-[10px] max-sm:ml-0">
              Search
            </button>
          </div>
        </header>
      </div>

      {/* Trending */}
      <div className="mb-[50px]">
        <h1 className="text-center font-bold font-Merriweather text-[36px] mt-4 mb-7 max-sm:text-[20px]">
          Trending Places
        </h1>
        <div className="flex justify-around flex-wrap">
          <a
            className="hover:scale-[105%] hover:shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://assets.vogue.in/photos/5ce43d58f55c27a7f4a28dce/2:3/w_2560%2Cc_limit/London-City-Travel-Guide-Vogue-India.jpg')",
              }}
              className=" w-[400px] h-[500px] relative bg-cover text-white mb-2 max-sm:w-[250px] max-sm:h-[300px]"
            >
              <div className="absolute bottom-[50px] left-[40px]">
                <a href="#" className="hover:underline">
                  <p className="font-Merriweather font-bold text-3xl">London</p>
                  <p className=" text-xl">UK</p>
                </a>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-[105%] hover:shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1564594736624-def7a10ab047?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')",
              }}
              className=" w-[400px] h-[500px] relative bg-cover text-white mb-2 max-sm:w-[250px] max-sm:h-[300px]"
            >
              <div className="absolute bottom-[50px] left-[40px]">
                <a href="#" className="hover:underline">
                  <p className="font-Merriweather font-bold text-3xl">Paris</p>
                  <p className=" text-xl">France</p>
                </a>
              </div>
            </div>
          </a>
          <a
            className="hover:scale-[105%] hover:shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://iphoneforum.fr/wp-content/uploads/2022/05/Quelle-est-la-capitale-de-Los-Angeles-iphonforum.jpg')",
              }}
              className="border w-[400px] h-[500px] relative bg-cover text-white mb-2 max-sm:w-[250px] max-sm:h-[300px]"
            >
              <div className="absolute bottom-[50px] left-[40px]">
                <a href="#" className="hover:underline">
                  <p className="font-Merriweather font-bold text-3xl">
                    Los Angeles
                  </p>
                  <p className=" text-xl">California</p>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Services */}
      <div className="bg-[rgb(42,74,122)] pt-[18px] pb-[18px]">
        <h1 className="text-white font-Merriweather text-[36px] text-center max-sm:text-[20px]">
          Why should you choose us?
        </h1>
        <div className="mt-[30px] flex justify-around flex-wrap">
          <a
            className="hover:shadow-[14px_14px_6px_3px_rgba(0,0,0,0.3)] hover:scale-[105%] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800')",
              }}
              className="w-[300px] h-[200px] rounded-lg shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] relative bg-cover mb-2 max-sm:w-[250px]"
            >
              <p className="absolute bottom-[30px] left-[20px] font-Merriweather text-white hover:underline text-xl">
                Luxury Hotel
              </p>
            </div>
          </a>
          <a
            className="hover:shadow-[14px_14px_6px_3px_rgba(0,0,0,0.3)] hover:scale-[105%] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg')",
              }}
              className="relative w-[300px] h-[200px] rounded-lg shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] mb-2 bg-cover max-sm:w-[250px]"
            >
              <p className="absolute bottom-[30px] left-[20px] font-Merriweather text-white hover:underline text-xl">
                Quality Food
              </p>
            </div>
          </a>
          <a
            className="hover:shadow-[14px_14px_6px_3px_rgba(0,0,0,0.3)] hover:scale-[105%] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://orioly.com/wp-content/uploads/2016/12/visiting-a-monument-with-friends-qualities-of-a-good-tour-guide-1.jpeg')",
              }}
              className=" relative  w-[300px] h-[200px] rounded-lg shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] bg-cover mb-2 max-sm:w-[250px]"
            >
              <p className="absolute bottom-[30px] left-[20px] font-Merriweather text-white hover:underline text-xl">
                Best Guides
              </p>
            </div>
          </a>
          <a
            className="hover:shadow-[14px_14px_6px_3px_rgba(0,0,0,0.3)] hover:scale-[105%] transition-all ease-in-out"
            href=""
          >
            <div
              style={{
                backgroundImage:
                  "url('https://www.orangewayfarer.com/wp-content/uploads/2020/03/cinque-terre.jpg')",
              }}
              className="relative w-[300px] h-[200px] rounded-lg shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] bg-cover mb-2 max-sm:w-[250px]"
            >
              <p className="absolute bottom-[30px] left-[20px] font-Merriweather text-white hover:underline text-xl">
                Places of your choice
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* About */}
      <div className="mt-10 mb-8">
        <h1 className="font-Merriweather font-bold text-[36px] text-center mb-7 max-sm:text-[20px]">
          About us
        </h1>
        <div className="w-full bg-[rgb(42,74,122)]">
          <div className="flex justify-around mx-auto items-center">
            <p className="text-justify w-[700px] text-white max-sm:text-center max-sm:w-[80%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
              repellat doloribus consequuntur voluptas obcaecati culpa,
              consequatur fugiat dicta dolorum enim debitis optio. Sunt,
              doloribus quod! Consequuntur necessitatibus eligendi iure hic
              cumque fugiat. Animi impedit optio dicta soluta neque eligendi
              quod tempore reiciendis, eveniet nostrum facere commodi magnam hic
              rem laborum doloribus laboriosam sapiente obcaecati qui,
              perferendis, nemo mollitia nobis labore. Dignissimos porro
              necessitatibus quasi, at asperiores veniam deserunt cupiditate?
              Quas dignissimos velit rem repudiandae praesentium sapiente
              accusantium nihil hic rerum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aut commodi nihil veniam sapiente
              repellendus unde provident, illo voluptatum, quod dignissimos
              fugit corporis. Quas officiis corrupti repudiandae at beatae
              perferendis cupiditate.
            </p>

            <img
              className="w-[550px] shadow-[8px_8px_6px_3px_rgba(0,0,0,0.3)] max-[1292px]:hidden"
              src="https://nairametrics.com/wp-content/uploads/2021/08/Emirates.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div>
        <h1 className="text-[36px] text-center font-Merriweather mb-5 max-sm:text-[20px]">
          Testimonial
        </h1>
        <div className="flex justify-around flex-wrap mb-4">
          <div className="bg-gray-300 mb-5  w-[500px] p-5 rounded-lg shadow-[4px_4px_6px_3px_rgba(0,0,0,0.3)] max-sm:w-[250px]">
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
              corporis aspernatur ullam maxime cupiditate quam perspiciatis
              sapiente! Fuga voluptate pariatur dolores fugiat deserunt sit
              magnam expedita modi. Rem, totam!
            </p>
            <div className="flex items-center">
              <div className="border w-[60px] h-[60px] rounded-[50%] overflow-hidden">
                <img
                  src="https://www.lovepanky.com/wp-content/uploads/2020/11/what-makes-a-man-a-man-1.jpg"
                  alt=""
                  className="bg-cover w-full h-full"
                />
              </div>

              <h3 className="font-Merriweather font-semibold ml-2">Sam</h3>
            </div>
          </div>
          <div className="bg-gray-300 mb-5 w-[500px] p-5 rounded-lg shadow-[4px_4px_6px_3px_rgba(0,0,0,0.3)] max-sm:w-[250px]">
            <p className="mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui
              corporis aspernatur ullam maxime cupiditate quam perspiciatis
              sapiente! Fuga voluptate pariatur dolores fugiat deserunt sit
              magnam expedita modi. Rem, totam!
            </p>
            <div className="flex items-center">
              <div className="border w-[60px] h-[60px] rounded-[50%] overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=ais"
                  alt=""
                  className="bg-cover w-full h-full"
                />
              </div>

              <h3 className="font-Merriweather font-semibold ml-2">Jullia</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-[30px] bg-[rgb(42,74,122)]">
        <h1 className="text-[36px] text-white font-Merriweather text-center pt-[20px] max-sm:text-[20px]">
          Contact
        </h1>
        <div className="pb-5">
          <form
            className="border-white border w-[500px] p-[30px] mx-auto mt-5 flex flex-col bg-white ] max-sm:w-[80%]"
            action=""
          >
            <label
              className="font-Merriweather text-xl text-black"
              htmlFor="name"
            >
              Name:
            </label>
            <input type="text" id="name" className="mb-5" />
            <label
              className="font-Merriweather text-xl text-black "
              htmlFor="email"
            >
              Email:
            </label>
            <input type="text" id="email" className="mb-5 " />
            <label
              className="font-Merriweather text-xl text-black"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              className="mb-5"
            ></textarea>
            <button className="font-bold border border-[rgb(42,74,122)] bg-[rgb(42,74,122)] rounded-3xl w-[120px] h-[50px] shadow-sm text-white hover:text-[rgb(45,116,223)] hover:border-[rgb(45,116,223)] hover:bg-white   ease-in-out hover:scale-[105%] max-sm:h-[30px] max-sm:w-[80px]">
              Send
            </button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="h-[50px] border-t-2 border-black flex justify-between items-center">
        <p className="ml-4 font-semibold max-sm:text-[14px] xsmall:text-[8px]">
          Copyright 2023-www.travelers.com
        </p>
        <div className="flex gap-2 items-center mr-12">
          <img src={facebook} alt="" className="h-[20px] max-sm:h-[10px]" />
          <img src={instagram} alt="" className="h-[20px] max-sm:h-[10px]" />
          <img src={whatsapp} alt="" className="h-[20px] max-sm:h-[10px]" />
          <img src={twitter} alt="" className="h-[20px] max-sm:h-[10px]" />
        </div>
      </div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className=" w-[100%] h-[100vh] absolute bg-white/70 top-0 translate-x-[-100%]"
      >
        <div className="w-[20%] h-full bg-[rgb(42,74,122)] relative  ">
          <div>
            <button id="close" className="mt-[20px] ml-[20px]">
              <img src={close} alt="" className="h-[25px]" />
            </button>
          </div>
          <div className="pt-24 text-white text-center">
            <a href="#">
              <h3 className="border-b mb-12">Home</h3>
            </a>
            <a href="#">
              <h3 className="border-b mb-12">Services</h3>
            </a>
            <a href="#">
              <h3 className="border-b mb-12">About</h3>
            </a>
            <a href="#">
              <h3 className="border-b mb-12">Contact</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
