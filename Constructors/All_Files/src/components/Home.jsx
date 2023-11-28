import React from "react";
import Header from "./home_component/Header";
import Gallery from "./home_component/Gallery";
import { motion } from "framer-motion";
import Contracts from "./home_component/Contracts";
import Testimonial from "./home_component/Testimonial";

function Home() {
  return (
    <div className="w-full">
      <div className="block">
        <Header />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Contracts />
      </div>

      <div>
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;
