import React from "react";
import man from "../../../images/man.png";
import w2 from "../../../images/w2.png";

function Search_Match() {
  return (
    <div className="bg-[url('../../../images/bg1.jpg')] bg-center bg-cover w-[full] h-[400px] relative mb-[50px]">
      <div className="absolute h-[100%] w-[100%] bg-black/60 backdrop-blur-sm">
        <h1 className="mt-[30px] sm:text-2xl text-white underline text-center text-4xl font-bold">
          Search and Match
        </h1>
        <div className="mt-[20px] flex justify-center items-center">
          <img src={man} alt="" className="w-[80px]" />
          <div className="flex flex-col ml-3 mr-3">
            <svg
              className="h-[30px]  fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
            </svg>
            <svg
              className="fill-primary rotate-180 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
            </svg>
          </div>
          <img src={w2} alt="" className="w-[80px]" />
        </div>
        <p className="text-center mt-[40px] text-2xl font-semibold text-white sm:text-sm sm:w-[90%] sm:mx-auto ">
          We Match Based On Compatibility, Not Just a Profile Picture
        </p>
        <p className="text-center text-gray-300 w-[70%] mx-auto mt-[10px] sm:text-[10px]">
          Users can Search for potential partners based on specific criteria
          like age, religion, caste, education, location, and more. Matching
          algroithms suggest compatible profiles based on user preference and
          compatibility factors.
        </p>
      </div>
    </div>
  );
}

export default Search_Match;
