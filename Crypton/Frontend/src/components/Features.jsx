import React from "react";
import Feature_Header from "./feature-components/Feature_Header";
import Feature_Section_1 from "./feature-components/Feature_Section_1";
import Features_Section_2 from "./feature-components/Features_Section_2";

function Features() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center bg-cover overflow-hidden">
      <Feature_Header />
      <Feature_Section_1 />
      <Features_Section_2 />
    </div>
  );
}

export default Features;
