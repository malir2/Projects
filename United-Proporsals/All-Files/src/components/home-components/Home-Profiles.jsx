import React, { useState } from "react";
import w3 from "../../../images/w3.png";
import man from "../../../images/man.png";

function Home_Profiles() {
  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);
  return (
    <>
      <h1 className="text-4xl font-bold text-primary text-center sm:text-2xl pt-[30px] underline">
        Latest Profiles
      </h1>
      <div className="mt-[40px] w-[95%] mx-auto flex flex-wrap gap-3 justify-between md:justify-around items-center mb-[20px]">
        <div className="relative border border-white h-[380px] w-[300px] rounded-lg sm:w-[200px] sm:h-[280px] bg-white/50 backdrop-blur-md shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)] overflow-hidden pt-1">
          <button
            onClick={() => {
              setP1(!p1);
            }}
            className="absolute left-3 top-2"
          >
            <svg
              className={`${p1 ? "fill-red-600" : "fill-gray-500"}`}
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
            src={w3}
            alt=""
            className="h-[40%] sm:h-[30%] mx-auto rounded-full shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px]"
          />
          <div className="w-[80%] mx-auto">
            <h1 className="text-xl sm:text-lg font-bold border-b-2  text-center shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              Fatima
            </h1>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)] ">
              <p>Age</p>
              <p>20</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>Status</p>
              <p>Single</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>City</p>
              <p>Lahore</p>
            </div>
            <div className="mt-[20px] sm:mt-[10px] flex justify-end items-center ">
              <button className=" text-sm sm:text-[10px] text-white hover:scale-105 transition-all hover:shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)]  flex items-center font-semibold bg-primary sm:p-1 p-2 rounded-[50px]">
                View Profile
                <svg
                  className="h-[20px] sm:h-[10px] fill-white"
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
        <div className="relative border border-white h-[380px] w-[300px] rounded-lg sm:w-[200px] sm:h-[280px] bg-white/50 backdrop-blur-md shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)] overflow-hidden pt-1">
          <button
            onClick={() => {
              setP2(!p2);
            }}
            className="absolute left-3 top-2"
          >
            <svg
              className={`${p2 ? "fill-red-600" : "fill-gray-500"}`}
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
            <h1 className="text-xl sm:text-lg font-bold border-b-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] text-center">
              Daniyal
            </h1>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)] ">
              <p>Age</p>
              <p>22</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>Status</p>
              <p>Single</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>City</p>
              <p>Multan</p>
            </div>
            <div className="mt-[20px] sm:mt-[10px] flex justify-end items-center ">
              <button className=" text-sm text-white hover:scale-105 transition-all hover:shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)]  flex items-center font-semibold bg-primary p-2 sm:p-1 rounded-[50px]  sm:text-[10px]  ">
                View Profile
                <svg
                  className="h-[20px] sm:h-[10px] fill-white"
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
        <div className="relative border border-white h-[380px] w-[300px] rounded-lg sm:w-[200px] sm:h-[280px] bg-white/50 backdrop-blur-md shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)] overflow-hidden pt-1">
          <button
            onClick={() => {
              setP3(!p3);
            }}
            className="absolute left-3 top-2"
          >
            <svg
              className={`${p3 ? "fill-red-600" : "fill-gray-500"}`}
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
            src={w3}
            alt=""
            className="h-[40%] sm:h-[30%] mx-auto rounded-full shadow-[0px_2px_3px_2px_rgb(162,162,162)] mb-[10px]"
          />
          <div className="w-[80%] mx-auto">
            <h1 className="text-xl sm:text-lg font-bold border-b-2 shadow-[0px_2px_3px_2px_rgb(162,162,162)] text-center">
              Malaika
            </h1>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>Age</p>
              <p>21</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>Status</p>
              <p>Single</p>
            </div>
            <div className="flex justify-around items-center sm:text-[12px] mt-[10px] border-b-2 pb-1 shadow-[0px_2px_3px_2px_rgb(162,162,162)]">
              <p>City</p>
              <p>Lahore</p>
            </div>
            <div className="mt-[20px] sm:mt-[10px] flex justify-end items-center ">
              <button className=" text-sm text-white hover:scale-105 transition-all hover:shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)]  flex items-center font-semibold bg-primary p-2 sm:p-1 rounded-[50px] sm:text-[10px]">
                View Profile
                <svg
                  className="h-[20px] fill-white sm:only:h-[10px]"
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
        <div className="relative border border-white h-[380px] w-[300px] rounded-lg sm:w-[200px] sm:h-[280px] bg-white/50 backdrop-blur-md shadow-[2px_2px_5px_3px_rgb(160,160,160,0.8)] overflow-hidden pt-1">
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
    </>
  );
}

export default Home_Profiles;
