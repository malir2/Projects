import React from "react";
import { Link } from "react-router-dom";

function Toggle_menu() {
  return (
    <div className="fixed border-t w-full h-[60vh]  bg-primary">
      <ul className="flex flex-col items-center gap-[40px] justify-center pt-[80px] font-secondary text-white">
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Toggle_menu;
