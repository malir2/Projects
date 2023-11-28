import React from "react";
import Navbar from "./Navbar";
import man from "../../images/man.png";
import Footer from "./Footer";

function Profile() {
  return (
    <div className=" bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200">
      <Navbar />
      <section className="w-90% p-[50px] translate-y-[65px]">
        <img
          src={man}
          alt=""
          className="h-[150px] mx-auto drop-shadow-xl hover:scale-105 transition-all"
        />
        <div className="flex justify-around items-center w-[80%] mx-auto mt-[20px] mb-[20px]">
          <div className="w-[40%]">
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              First Name:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Age:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Color:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Cast:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              ReligionSubCategory:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Phone no:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Martial Status:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              State:
            </div>
          </div>
          <div className="w-[40%]">
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Last Name:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Email:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Height:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Religion:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Gender:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Date of birth:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              Country:
            </div>
            <div className=" p-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px] w-[100%] text-xl font-semibold hover:scale-105 transition-all">
              City:
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
