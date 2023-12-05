import React from "react";

function Footer() {
  return (
    <div className="w-full border-t h-[80px] sm:flex-col sm:justify-center sm:gap-[10px] flex items-center justify-between px-[30px] sm:px-[10px] md:text-[12px] sm:text-[8px]">
      <div className="text-gray-500">
        © Cryptcon all Rights Reserved. Designed By{" "}
        <span className="text-primary underline">TemplatesCoder.com</span>
      </div>
      <div>
        <span className="hover:text-primary">Terms & Condition</span> &nbsp;
        &nbsp; | &nbsp; &nbsp;{" "}
        <span className="hover:text-primary">Privacy Policy</span> &nbsp; &nbsp;
        | &nbsp; &nbsp; <span className="hover:text-primary">Contact Us</span>
      </div>
    </div>
  );
}

export default Footer;
