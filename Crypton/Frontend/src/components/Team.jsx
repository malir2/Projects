import React from "react";
import Team_Section_2 from "./team-components/Team_Section_2";
import Team_Header from "./team-components/Team_Header";

function Team() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center overflow-hidden">
      <Team_Header />
      <Team_Section_2 />
    </div>
  );
}

export default Team;
