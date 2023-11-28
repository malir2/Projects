import React from "react";
import Navbar from "./Navbar";
import Header from "./home-components/Header";
import Home_Profiles from "./home-components/Home-Profiles";
import Home_Des from "./home-components/Home-Des";
import Search_Match from "./home-components/Search_Match";
import App_Pro from "./home-components/App_Pro";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-gradient-to-tl from-pink-200 via-gray-300 to-yellow-200">
      <Navbar />
      <Header />
      <Home_Profiles />
      <Home_Des />
      <Search_Match />
      <App_Pro />
      <Footer />
    </div>
  );
}

export default Home;
