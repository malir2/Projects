import React from "react";

function Toggle_menu() {
  return (
    <div className="fixed border-t w-full h-[60vh]  bg-primary">
      <ul className="flex flex-col items-center gap-[40px] justify-center pt-[80px] font-secondary text-white">
        <li>Gallery</li>
        <li>Services</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Toggle_menu;
