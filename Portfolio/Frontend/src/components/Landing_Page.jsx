import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import What_I_Do from "./sections/What_I_Do";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function Landing_Page() {
  return (
    <div className="bg-black scrollbar-thumb-primary scrollbar-track-secondary scrollbar scrollbar-w-1 w-full h-screen scrollbar-none ">
      <Home />
      <About />
      <What_I_Do />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Landing_Page;
