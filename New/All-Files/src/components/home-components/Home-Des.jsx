import React from "react";
import about from "../../../images/about.jpg";

function Home_Des() {
  return (
    <div className="w-[90%] md:w-full mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex gap-[20px] sm:flex-col-reverse">
            <img
              alt="ecommerce"
              className="shadow-[4px_4px_12px_3px_rgb(162,162,162)] lg:w-1/2 sm:w-[80%] sm:mx-auto w-full lg:h-auto h-64 object-cover object-center rounded"
              src={about}
            />
            <div className="lg:w-1/2 w-full sm:w-[95%] sm:pl-0 lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
              <h1 className="text-primary sm:text-2xl text-4xl font-bold title-font underline mb-1">
                Matchmakers
              </h1>

              <p className="leading-relaxed text-xl mt-[30px] sm:text-sm">
                Welcome to United Proposals, where love knows no boundaries, and
                relationships transcend borders. We are more than just a
                matrimonial platform; we are the bridge that connects hearts
                from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home_Des;
