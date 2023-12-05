import React from "react";
import { motion } from "framer-motion";

function Home_Section_6() {
  const divVariant = {
    initial: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const contentVariant = {
    initial: {
      x: "-20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="h-auto bg-url[('https://themes.templatescoder.com/crypton/html/demo/1-3/03-Light-Theme/images/tokensale.svg')] bg-third/50 bg-fixed py-[50px] md:py-[10px]  sm:w-full overflow-hidden">
      <div className="flex justify-between items-center md:flex-col w-[80%] h-full md:h-auto md:w-[90%] mx-auto py-[30px] md:py-0 overflow-hidden">
        <motion.div
          viewport={{ once: true }}
          variants={divVariant}
          initial="initial"
          whileInView="visible"
        >
          <motion.h1
            viewport={{ once: true }}
            variants={contentVariant}
            className="text-primary text-sm font-primary"
          >
            TOKEN
          </motion.h1>
          <motion.h1
            viewport={{ once: true }}
            variants={contentVariant}
            className="text-4xl font-primary font-bold mt-[10px]"
          >
            Token Sale
          </motion.h1>
          <motion.p
            viewport={{ once: true }}
            variants={contentVariant}
            className="mt-[10px] w-[70%] text-gray-500"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </motion.p>
          <div className="mt-[20px] flex flex-col gap-[10px]">
            <motion.div
              viewport={{ once: true }}
              variants={contentVariant}
              className="flex gap-[10px] items-center"
            >
              <span className="w-[30px] h-[30px] bg-[#f85d77] rounded-full"></span>
              <p className="text-gray-500">73% Financial Overhead</p>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              variants={contentVariant}
              className="flex gap-[10px] items-center"
            >
              <span className="w-[30px] h-[30px] bg-[#5ad6f8] rounded-full"></span>
              <p className="text-gray-500">55% Bonus & Found</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              variants={contentVariant}
              className="flex gap-[10px] items-center"
            >
              <span className="w-[30px] h-[30px] bg-[#f8c04e] rounded-full"></span>
              <p className="text-gray-500">12% Gift Code Inventory</p>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              variants={contentVariant}
              className="flex gap-[10px] items-center"
            >
              <span className="w-[30px] h-[30px] bg-[#ac56f7] rounded-full"></span>
              <p className="text-gray-500">32% Bounty and Overhead</p>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              variants={contentVariant}
              className="flex gap-[10px] items-center"
            >
              <span className="w-[30px] h-[30px] bg-[#61f89f] rounded-full"></span>
              <p className="text-gray-500">38% it infastrueture</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.svg
            className="w-[400px] h-[400px] listtopie-svg md:w-[200px] md:h-[200px]"
            style={{
              WebkitTransform: "rotate(270deg)",
              MsTransform: "rotate(270deg)",
              OTransform: "rotate(270deg)",
              transform: "rotate(270deg)",
            }}
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Snap</desc>
            <defs></defs>
            <g>
              <motion.path
                d="M390,200 A190,190 0 0,1 377.64606183596965,267.3934471159537 L279.4732381897759,230.14970002555822 A85,85 0 0,0 285,200 L390,200 Z"
                id="PathsvgSlpnxx50200"
                idInt="0"
                stroke="#f2f8fe"
                fill="#f8c04e"
                start="0"
                deg="20.77520340586566"
                note="12.2"
                style={{ fillOpacity: 1, strokeWidth: 5 }}
              ></motion.path>
              <motion.path
                d="M377.64606183596965,267.3934471159537 A190,190 0 0,1 245.03381174351586,384.58590357838693 L220.14670525367814,282.57790423243625 A85,85 0 0,0 279.4732381897759,230.14970002555822 L377.64606183596965,267.3934471159537 Z"
                id="PathsvgSlpnxx50201"
                idInt="1"
                stroke="#f2f8fe"
                fill="#ac56f7"
                start="20.77520340586566"
                deg="55.514068117313165"
                note="32.6"
                style={{
                  fillOpacity: 1,
                  strokeWidth: 5,
                }}
              ></motion.path>
              <motion.path
                d="M245.03381174351586,384.58590357838693 A190,190 0 0,1 51.63636215462063,318.69385394907823 L133.62679359548815,253.0998820298508 A85,85 0 0,0 220.14670525367814,282.57790423243625 L245.03381174351586,384.58590357838693 Z"
                id="PathsvgSlpnxx50202"
                idInt="2"
                stroke="#f2f8fe"
                fill="#61f89f"
                start="76.28927152317883"
                deg="65.05022705771052"
                note="38.2"
                style={{ fillOpacity: 1, strokeWidth: 5 }}
              ></motion.path>
              <motion.path
                d="M51.63636215462063,318.69385394907823 A190,190 0 0,1 91.94264131759873,43.71945983398035 L151.65855006313626,130.0850215046754 A85,85 0 0,0 133.62679359548815,253.0998820298508 L51.63636215462063,318.69385394907823 Z"
                id="PathsvgSlpnxx50203"
                idInt="3"
                stroke="#f2f8fe"
                fill="#5ad6f8"
                start="141.33949858088934"
                deg="93.99928098391675"
                note="55.2"
                style={{ fillOpacity: 1, strokeWidth: 5 }}
              ></motion.path>
              <motion.path
                d="M91.94264131759873,43.71945983398035 A190,190 0 0,1 389.9999971061345,199.9668387443806 L284.99999870537596,199.98516470143343 A85,85 0 0,0 151.65855006313626,130.0850215046754 L91.94264131759873,43.71945983398035 Z"
                id="PathsvgSlpnxx50204"
                idInt="4"
                stroke="#f2f8fe"
                fill="#f85d77"
                start="235.3387795648061"
                deg="124.65122043519396"
                note="73.2"
                style={{ fillOpacity: 1, strokeWidth: 5 }}
              ></motion.path>
            </g>
            <g>
              <motion.text
                x="319.4964451968517"
                y="234.7921169248412"
                id="tsvgSlpnxx5020PathsvgSlpnxx50200"
                stroke="#3d1f94"
                fill="#3d1f94"
                tx="335.2464451968517"
                ty="224.7921169248412"
                style={{
                  fontSize: "18px",
                  pointerEvents: "none",
                  fontFamily: "Rubik",
                  fontWeight: 300,
                  opacity: 1,
                }}
                transform="matrix(0,1,-1,0,560.0386,-110.4543)"
              >
                12.2
              </motion.text>
              <motion.text
                x="275.30229973033147"
                y="313.0326584817546"
                id="tsvgSlpnxx5020PathsvgSlpnxx50201"
                stroke="#3d1f94"
                fill="#3d1f94"
                tx="291.05229973033147"
                ty="303.0326584817546"
                style={{
                  fontSize: "18px",
                  pointerEvents: "none",
                  fontFamily: "Rubik",
                  fontWeight: 300,
                  opacity: 1,
                }}
                transform="matrix(0,1,-1,0,594.085,11.9804)"
              >
                32.6
              </motion.text>
              <motion.text
                x="139.9057884114676"
                y="340.15314402115484"
                id="tsvgSlpnxx5020PathsvgSlpnxx50202"
                stroke="#3d1f94"
                fill="#3d1f94"
                tx="155.6557884114676"
                ty="330.15314402115484"
                style={{
                  fontSize: "18px",
                  pointerEvents: "none",
                  fontFamily: "Rubik",
                  fontWeight: 300,
                  opacity: 1,
                }}
                transform="matrix(0,1,-1,0,485.8089,174.4974)"
              >
                38.2
              </motion.text>
              <motion.text
                x="48.20379469649496"
                y="190.05808378022414"
                id="tsvgSlpnxx5020PathsvgSlpnxx50203"
                stroke="#3d1f94"
                fill="#3d1f94"
                tx="63.95379469649496"
                ty="180.05808378022414"
                style={{
                  fontSize: "18px",
                  pointerEvents: "none",
                  fontFamily: "Rubik",
                  fontWeight: 300,
                  opacity: 1,
                }}
                transform="matrix(0,1,-1,0,244.0119,116.1043)"
              >
                55.2
              </motion.text>
              <motion.text
                x="248.0901046358291"
                y="88.21867532299385"
                id="tsvgSlpnxx5020PathsvgSlpnxx50204"
                stroke="#3d1f94"
                fill="#3d1f94"
                tx="263.8401046358291"
                ty="78.21867532299385"
                style={{
                  fontSize: "18px",
                  pointerEvents: "none",
                  fontFamily: "Rubik",
                  fontWeight: 300,
                  opacity: 1,
                }}
                transform="matrix(0,1,-1,0,342.0588,-185.6214)"
              >
                73.2
              </motion.text>
            </g>
            <motion.line
              x1="283.6068933944174"
              x2="386.88599699928596"
              y1="215.32603591717455"
              y2="234.2581979325078"
              id="lsvgSlpnxx50200"
            ></motion.line>
            <motion.line
              x1="256.2868761969322"
              x2="325.8177232637308"
              y1="263.6929161523574"
              y2="342.3724008111518"
              id="lsvgSlpnxx50201"
            ></motion.line>
            <motion.line
              x1="172.5872146543618"
              x2="138.7243621685734"
              y1="280.45830721307755"
              y2="379.84798082923214"
              id="lsvgSlpnxx50202"
            ></motion.line>
            <motion.line
              x1="115.89870944874234"
              x2="12.008879944247582"
              y1="187.67226997322948"
              y2="172.44389758721883"
              id="lsvgSlpnxx50203"
            ></motion.line>
            <motion.line
              x1="239.46479195669437"
              x2="288.2154173149639"
              y1="124.71699929057802"
              y2="31.72035135540969"
              id="lsvgSlpnxx50204"
            ></motion.line>
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
}

export default Home_Section_6;
