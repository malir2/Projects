import React from "react";
import Home_Header from "./home-components/Home_Header";
import Home_Section_2 from "./home-components/Home_Section_2";
import Home_Section_3 from "./home-components/Home_Section_3";
import Home_Section_4 from "./home-components/Home_Section_4";
import Home_Section_5 from "./home-components/Home_Section_5";
import Home_Section_6 from "./home-components/Home_Section_6";
import Home_Section_7 from "./home-components/Home_Section_7";
import Home_Section_8 from "./home-components/Home_Section_8";
import Home_Section_9 from "./home-components/Home_Section_9";

function Home() {
  return (
    <div className=" bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/banner-bg.svg')] bg-fixed">
      <Home_Header />
      <Home_Section_2 />
      <Home_Section_3 />
      <Home_Section_4 />
      <Home_Section_5 />
      <Home_Section_6 />
      <Home_Section_7 />
      <Home_Section_8 />
      <Home_Section_9 />
    </div>
  );
}

export default Home;
