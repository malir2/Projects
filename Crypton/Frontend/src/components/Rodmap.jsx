import React from "react";
import Roadmap_Section_1 from "./roadmap-components/Roadmap_Section_1";
import Roadmap_Section_2 from "./roadmap-components/Roadmap_Section_2";

function Rodmap() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center bg-cover overflow-hidden">
      <Roadmap_Section_1 />
      <Roadmap_Section_2 />
    </div>
  );
}

export default Rodmap;
