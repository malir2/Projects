import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import whatsapp_red from "../media/whatsapp-red.png";
import insta_red from "../media/instagram-red.png";
import facebook_red from "../media/facebook-red.png";

function Contact() {
  return (
    <div className="w-full h-full lg:h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-600">
      <div className="w-[90%] mx-auto">
        <Navbar />
        <div className="mt-[30px] flex justify-center pb-5">
          <div className="w-[60%] border p-[30px] lg:hidden">
            <h1 className="text-3xl font-bold text-red-600">Contact us:</h1>
            <p className="text-gray-400 mt-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum
              voluptatum asperiores alias officia sunt nisi ducimus eaque,
              facere quas, eligendi incidunt vitae omnis suscipit at perferendis
              repudiandae repellendus unde!
            </p>
            <h1 className="text-lg text-red-600 font-bold mt-[50px]">
              You can also contact us on:
            </h1>
            <div className="flex flex-col mt-[20px] gap-3">
              <div className="flex items-center">
                <img src={whatsapp_red} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">0322-1389138</p>
              </div>
              <div className="flex items-center">
                <img src={insta_red} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">@gym.pro.20</p>
              </div>
              <div className="flex items-center">
                <img src={facebook_red} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">Gym-pro</p>
              </div>
            </div>
          </div>
          <div className="w-[40%] lg:w-[90%]  border flex  justify-center bg-black/50 backdrop-blur-lg">
            <form className=" w-[90%] mx-auto pt-[20px] pb-[20px]  ">
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="name"
                  className="text-red-600 font-bold text-left mb-[10px] text-xl"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className=" h-[30px] bg-gray-800 border-none caret-red-600 text-red-500"
                />
              </div>
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="email"
                  className="text-red-600 font-bold text-left mb-[10px] text-xl"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  className=" h-[30px] bg-gray-800 border-none caret-red-600 text-red-500"
                />
              </div>
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="message"
                  className="text-red-600 font-bold text-left mb-[10px] text-xl"
                >
                  Message:
                </label>
                <textarea
                  className="h-[150px] bg-gray-800 border-none caret-red-600 text-red-500"
                  name="Message"
                  id=""
                ></textarea>
              </div>

              <button className="bg-red-600 p-2 rounded-[22px] w-[120px] hover:scale-110 sm:w-[80px] sm:text-xs sm:h-[30px]">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:fixed lg:bottom-0 w-[100%]">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
