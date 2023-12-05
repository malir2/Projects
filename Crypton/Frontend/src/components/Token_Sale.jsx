import React from "react";
import Token_Header from "./token-components/Token_Header";
import Token_Section_2 from "./token-components/Token_Section_2";
import Token_Section_3 from "./token-components/Token_Section_3";

function Token_Sale() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center bg-cover overflow-hidden">
      <Token_Header />
      <Token_Section_2 />
      <Token_Section_3 />
    </div>
  );
}

export default Token_Sale;
