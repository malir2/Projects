import React from "react";
import Faq_Header from "./faq-components/Faq_Header";
import Faq_Section from "./faq-components/Faq_Section";

function FAQ() {
  return (
    <div className="bg-[url('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/sub-page-banner.svg')] w-full h-[100%] bg-cover bg-center overflow-hidden">
      <Faq_Header />
      <Faq_Section />
    </div>
  );
}

export default FAQ;
