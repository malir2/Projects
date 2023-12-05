import React from "react";
import Contact_Header from "./contact-components/Contact_Header";
import Contact_Section_1 from "./contact-components/Contact_Section_1";

function Contact() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-center bg-cover overflow-hidden">
      <Contact_Header />
      <Contact_Section_1 />
    </div>
  );
}

export default Contact;
