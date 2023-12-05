import React from "react";
import About_header from "./about-components/About-header";
import About_Section_2 from "./about-components/About_Section_2";
import About_Section_3 from "./about-components/About_Section_3";
import About_Section_4 from "./about-components/About_Section_4";

function About() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center overflow-hidden">
      <About_header />
      <About_Section_2 />
      <About_Section_3 />
      <About_Section_4 />
    </div>
  );
}

export default About;
