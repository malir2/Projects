import React from "react";
import instagram from "../media/instagram.png";
import facebook from "../media/facebook.png";
import email from "../media/email.png";
import whatsapp from "../media/whatsapp.png";

function Footer() {
  return (
    <div className="bg-gray-900 mt-1 border-t h-[50px] flex items-center justify-between ">
      <p className="text-gray-600 ml-4 sm:text-[6px]">
        © 2023 All Rights Reserved. GYM-Pro™ is a registered trademark.
      </p>
      <div className="flex gap-5 mr-10 xsm:gap-2">
        <img src={whatsapp} alt="" className="sm:h-[20px]" />
        <img src={facebook} alt="" className="sm:h-[20px]" />
        <img src={instagram} alt="" className="sm:h-[20px]" />
        <img src={email} alt="" className="sm:h-[20px]" />
      </div>
    </div>
  );
}

export default Footer;
