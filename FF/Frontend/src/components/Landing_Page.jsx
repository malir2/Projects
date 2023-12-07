import React from "react";
import Intro from "./page-components/Intro";
import Text from "./page-components/Text";
import Experience from "./page-components/Experience";
import Colors from "./page-components/Colors";
import Text2 from "./page-components/Text_2";
import Start from "./page-components/Start";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Landing_Page() {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <Start />
        <Intro />
        <Text />
        <Experience />
        <Colors />
        <Text2 />
      </div>
    </>
  );
}

export default Landing_Page;
