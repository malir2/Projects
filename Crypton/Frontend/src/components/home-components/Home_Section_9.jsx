import React, { useState } from "react";
import { motion } from "framer-motion";

function Home_Section_9() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-auto bg-white py-[50px]">
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-center text-primary font-secondary sm:text-sm">
          FAQS
        </h1>
        <h1 className="text-center sm:text-4xl text-gray-950 text-5xl font-secondary mt-[20px] font-extrabold">
          Frequently Asked questions
        </h1>
        <p className="text-center mt-[20px] text-gray-500 text-sm sm:text-[8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </motion.div>
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-[80%] mx-auto mt-[50px] font-primary"
      >
        <div>
          <div className="overflow-x-auto scrollbar-none flex justify-center gap-[10px] sm:gap-0">
            <div
              className={`p-3 cursor-pointer text-[18px] md:text-[8px] ${
                activeTab === "tab1"
                  ? "text-primary border-b-primary border-b-4"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              GENERAL
            </div>
            <div
              className={`p-3 cursor-pointer text-[18px] md:text-[8px] ${
                activeTab === "tab2"
                  ? "text-primary border-b-primary border-b-4"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              PRE-ICO & ICO
            </div>
            <div
              className={`p-3 cursor-pointer text-[18px] md:text-[8px] ${
                activeTab === "tab3"
                  ? "text-primary border-b-primary border-b-4"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab3")}
            >
              TOKEN
            </div>
            <div
              className={`p-3 cursor-pointer text-[18px] md:text-[8px] ${
                activeTab === "tab4"
                  ? "text-primary border-b-primary border-b-4"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab4")}
            >
              CLIENT
            </div>
            <div
              className={`p-3 cursor-pointer text-[18px] md:text-[8px] ${
                activeTab === "tab5"
                  ? "text-primary border-b-primary border-b-4"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab5")}
            >
              LEGAL
            </div>
          </div>
          <div className="mt-[30px]">
            {activeTab === "tab1" && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 grid-rows-2 gap-[50px] sm:grid-cols-1 sm:grid-rows-4"
                >
                  <div>
                    <h1 className="text-xl md:text-sm font-semibold text-primary">
                      What is Ico Crypto?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      What cryptocurrencies can I use to purchase?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How can I participate in the ICO Token sale?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How do I benefit from the ICO Token?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 grid-rows-2 gap-[50px] sm:grid-cols-1 sm:grid-rows-4"
                >
                  <div>
                    <h1 className="text-xl md:text-sm font-semibold text-primary">
                      What is Ico Crypto?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      What cryptocurrencies can I use to purchase?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How can I participate in the ICO Token sale?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How do I benefit from the ICO Token?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 grid-rows-2 gap-[50px] sm:grid-cols-1 sm:grid-rows-4"
                >
                  <div>
                    <h1 className="text-xl md:text-sm font-semibold text-primary">
                      What is Ico Crypto?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      What cryptocurrencies can I use to purchase?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How can I participate in the ICO Token sale?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How do I benefit from the ICO Token?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            {activeTab === "tab4" && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 grid-rows-2 gap-[50px] sm:grid-cols-1 sm:grid-rows-4"
                >
                  <div>
                    <h1 className="text-xl md:text-sm font-semibold text-primary">
                      What is Ico Crypto?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      What cryptocurrencies can I use to purchase?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How can I participate in the ICO Token sale?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How do I benefit from the ICO Token?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
            {activeTab === "tab5" && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="grid grid-cols-2 grid-rows-2 gap-[50px] sm:grid-cols-1 sm:grid-rows-4"
                >
                  <div>
                    <h1 className="text-xl md:text-sm font-semibold text-primary">
                      What is Ico Crypto?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      What cryptocurrencies can I use to purchase?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How can I participate in the ICO Token sale?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold md:text-sm text-primary">
                      How do I benefit from the ICO Token?
                    </h1>
                    <p className="mt-[10px] text-gray-500 md:text-[10px]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. remaining essentially unchanged.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home_Section_9;
