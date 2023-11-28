import React from "react";
import Home_header from "./home-components/Home_header";
import Home_latest_products from "./home-components/Home_latest_products";
import Brands from "./home-components/Brands";
import Testimonials from "./home-components/Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Home_header />
      <Home_latest_products />
      <Brands />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
