import React from "react";
import whatsapp from "../../media/whatsapp.png";
import email from "../../media/email.png";
import instagram from "../../media/instagram.png";

function Contact() {
  return (
    <div className="h-auto pt-[100px] w-full sm:h-auto bg-black text-white border-none sm:pt-[50px] overflow-hidden relative">
      <div className="h-screen lg:h-auto flex   items-center w-[90%] mx-auto">
        <div className="mt-[30px] flex lg:flex-col justify-center pb-5">
          <div className="w-[60%] lg:w-[100%] p-[30px] ">
            <h1 className="text-3xl font-bold text-primary">Contact me:</h1>
            <p className="text-gray-400 mt-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eum
              voluptatum asperiores alias officia sunt nisi ducimus eaque,
              facere quas, eligendi incidunt vitae omnis suscipit at perferendis
              repudiandae repellendus unde!
            </p>
            <h1 className="text-lg text-primary font-bold mt-[50px]">
              You can also contact us on:
            </h1>
            <div className="flex flex-col mt-[20px] gap-3">
              <div className="flex items-center">
                <img src={whatsapp} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">0322-4822972</p>
              </div>
              <div className="flex items-center">
                <img src={email} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">
                  maliramzan314@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <img src={instagram} alt="" className="w-[32px]" />
                <p className="text-gray-400 ml-[20px]">Gym-pro</p>
              </div>
            </div>
          </div>
          <div className="w-[40%] lg:w-[100%]  border border-primary rounded-lg bg-gray-900/80 backdrop-blur-lg flex  justify-center ">
            <form className=" w-[90%] mx-auto pt-[20px] pb-[20px]  ">
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="name"
                  className="text-primary font-bold text-left mb-[10px] text-xl"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className=" h-[30px] bg-gray-800 border-none caret-primary text-gray-600"
                />
              </div>
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="email"
                  className="text-primary font-bold text-left mb-[10px] text-xl"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  className=" h-[30px] bg-gray-800 border-none caret-primary text-gray-600"
                />
              </div>
              <div className="flex flex-col w-[90%] mb-[20px]">
                <label
                  htmlFor="message"
                  className="text-primary font-bold text-left mb-[10px] text-xl"
                >
                  Message:
                </label>
                <textarea
                  className="h-[150px] bg-gray-800 border-none caret-primary text-gray-600"
                  name="Message"
                  id=""
                ></textarea>
              </div>

              <button className="bg-primary p-2 rounded-[22px] w-[120px] hover:scale-110 sm:w-[80px] sm:text-xs sm:h-[30px]">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
