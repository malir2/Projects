import React, { useState } from "react";
import Navbar from "./Navbar";
import man from "../../images/man.png";
import filter from "../../images/filter.png";
import Footer from "./Footer";

function Feature_Profiles() {
  const [right, setRight] = useState(false);
  const [p4, setP4] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200">
      <Navbar />
      <div>
        <section className="pt-[100px]">
          <button
            onClick={() => {
              setRight(!right);
            }}
            className="bg-white p-3 rounded-full  relative left-[90%] sm:left-[70%] drop-shadow-lg mb-3"
          >
            <img src={filter} alt="" className="w-[30px] sm:w-[20px]" />
          </button>
          <section
            className={`flex flex-col justify-center rounded-lg mb-[20px] z-10 transition-all bg-white w-[400px] sm:w-[200px] p-[20px] shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)] fixed ${
              right ? "right-[20px]" : "right-[-150%]"
            }`}
          >
            <div className="flex flex-col mb-[15px]">
              <label htmlFor="" className="font-bold text-primary">
                Gender:
              </label>

              <select
                id="cars"
                className="border-none rounded-lg shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)]"
              >
                <option value="martial">Male</option>
                <option value="single">Female</option>
              </select>
            </div>
            <div className="flex flex-col mb-[15px]">
              <label htmlFor="" className="font-bold text-primary">
                Age:
              </label>

              <select
                id="cars"
                className="border-none rounded-lg shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)]"
              >
                <option value="martial">18 - 25</option>
                <option value="single">25 - 35</option>
                <option value="married">35 - 40</option>
              </select>
            </div>
            <div className="flex flex-col mb-[15px]">
              <label htmlFor="" className="font-bold text-primary">
                Cast:
              </label>

              <select
                id="cars"
                className="border-none rounded-lg shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)]"
              >
                <option value="martial">Malik</option>
                <option value="single">Rajpoot</option>
                <option value="married">Arain</option>
                <option value="married">Gujjar</option>
                <option value="married">Rana</option>
                <option value="married">Kumhar</option>
                <option value="married">Kambho</option>
                <option value="married">Other</option>
              </select>
            </div>
            <div className="flex flex-col mb-[15px]">
              <label htmlFor="" className="font-bold text-primary">
                Religion:
              </label>

              <select
                id="cars"
                className="border-none rounded-lg shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)]"
              >
                <option value="martial">Muslim</option>
                <option value="single">Christan</option>
              </select>
            </div>
            <div className="flex flex-col mb-[15px]">
              <label htmlFor="" className="font-bold text-primary">
                Martial Status:
              </label>

              <select
                id="status"
                className="border-none rounded-lg shadow-[2px_2px_7px_4px_rgb(160,160,160,0.5)]"
              >
                <option value="martial">Martial</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </section>
          <div className="w-[90%] mx-auto flex justify-between sm:justify-center items-center flex-wrap gap-4">
            <div className="relative border border-white h-[380px] w-[300px] rounded-lg sm:w-[200px] sm:h-[280px] bg-white/50 backdrop-blur-md shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)] overflow-hidden pt-1 mb-[20px]">
              <button
                onClick={() => {
                  setP4(!p4);
                }}
                className="absolute left-3 top-2"
              >
                <svg
                  className={`${p4 ? "fill-red-600" : "fill-gray-500"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#8c8c8c"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 51.997 51.997"
                  xmlSpace="preserve"
                >
                  <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905  c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478  c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014  C52.216,18.553,51.97,16.611,51.911,16.242z" />
                </svg>
              </button>
              <img
                src={man}
                alt=""
                className="h-[40%] sm:h-[30%] mx-auto rounded-full shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px]"
              />
              <div className="w-[80%] mx-auto">
                <h1 className="text-xl font-bold border-b-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] text-center sm:text-lg">
                  Fahad
                </h1>
                <div className="flex justify-around mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)] sm:text-[12px] items-center">
                  <p>Age</p>
                  <p>23</p>
                </div>
                <div className="flex justify-around sm:text-[12px] items-center mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
                  <p>Status</p>
                  <p>Single</p>
                </div>
                <div className="flex justify-around sm:text-[12px] items-center mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
                  <p>City</p>
                  <p>Lahore</p>
                </div>
                <div className="mt-[20px] sm:mt-[10px] flex justify-end items-center ">
                  <button className=" text-sm text-white hover:scale-105 transition-all hover:shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)]  flex items-center font-semibold bg-primary p-2 sm:p-1 rounded-[50px] sm:text-[10px]">
                    View Profile
                    <svg
                      className="h-[20px] fill-white sm:h-[10px]"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 330 330"
                      xml:space="preserve"
                    >
                      <path
                        id="XMLID_222_"
                        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex overflow-x-auto sm:justify-center"></div>
      <Footer />
    </div>
  );
}

export default Feature_Profiles;
