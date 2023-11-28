import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Favourite() {
  return (
    <div className="bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200 h-screen">
      <Navbar />
      <div className="h-full flex items-center justify-center text-lg ">
        <p>No favorite profiles found. Add profiles to your favorites!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Favourite;
