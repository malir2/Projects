import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";

function App_Pro() {
  return (
    <div className="w-[80%] mx-auto pb-[50px] ">
      <div className="flex space-between sm:flex-col">
        <div className="w-1/2 flex flex-col sm:w-[90%]">
          <h1 className="text-primary text-4xl font-bold sm:text-2xl">
            Download United Proposals App
          </h1>
          <p className="mt-[10px]">
            Unlike traditional rishta theory and matchmaking, we rely on a
            cooperative, interactive bond between our representatives and our
            clients. Initially, the user is requested some details and then
            assisted by an intelligent facilitator (referred to...)
          </p>
        </div>
        <div className="w-1/2 flex  flex-col items-center sm:w-[90%] sm:mt-[20px]">
          <h1 className="text-xl sm:text-primary">Avaliable on</h1>
          <button className="l ">
            <img
              src={playstore}
              alt=""
              className="h-[80px] hover:scale-105 transition-al"
            />
          </button>
          <button className="hover:scale-105 transition-all">
            <img src={appstore} alt="" className="h-[90px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App_Pro;
