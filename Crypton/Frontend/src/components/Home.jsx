import React from "react";
import Home_Header from "./home-components/Home_Header";
import Home_Section_2 from "./home-components/Home_Section_2";

function Home() {
  return (
    <div className=" bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/banner-bg.svg')] bg-fixed">
      <Home_Header />
      <Home_Section_2 />
    </div>
  );
}

export default Home;
