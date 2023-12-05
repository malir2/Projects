import React from "react";
import { motion } from "framer-motion";
import hero from "../../media/home-hero.png";

function About_Section_3() {
  return (
    <div className="bg-third py-[80px]">
      <div className="flex justify-between w-[90%] mx-auto lg:flex-col lg:items-center lg:gap-[50px]">
        <motion.div
          initial={{ x: "-40vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-1/2 lg:w-[90%]"
        >
          <h1 className="text-3xl font-primary font-bold">Our Mission</h1>
          <p className="mt-[10px] font-semibold text-gray-600">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </p>
          <p className="mt-[20px] text-gray-500">
            Bitcoin is different than any currency you’ve used before, so it’s
            very important to understand some key points. You can use them to
            send or receive any amount of money, with anyone, anywhere in the
            world, at very low cost. Bitcoin payments are impossible to block
            and safety. Bitcoin is different than any currency you’ve used
            before, so it’s very important to understand some key points. You
            can use them to send or receive any amount of money, with anyone,
            anywhere in the world, at very low cost. Bitcoin payments are
            impossible to block and safety.
          </p>
        </motion.div>
        <motion.iframe
          className="md:w-[90%]"
          initial={{ x: "40vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SzAuB2FG79A?si=zEUW5A-Kl19LW0fu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></motion.iframe>
      </div>
      <div className="flex w-[90%] mx-auto overflow-hidden mt-[30px] justify-around items-center lg:flex-col-reverse">
        <motion.div
          initial={{ x: "-20vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.img
            whileInView={{
              y: [0, -10, 0],
              transition: {
                delay: 1.7,
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            viewport={{ once: true }}
            src={hero}
            alt=""
            className="h-[400px] sm:h-[250px] block mt-[90px] mr-[20px] sm:mr-[5px]"
          />
        </motion.div>
        <motion.div className="w-[40%] lg:w-full lg:mt-[50px]">
          <h1 className="text-3xl font-primary font-bold">
            Why are so many people investing Digitall currencies like BitCoin
          </h1>
          <p className="text-sm mt-[30px] text-gray-500">
            Bitcoin is different than any currency you’ve used before, so it’s
            very important to understand some key points. You can use them to
            send or receive any amount of money, with anyone, anywhere in the
            world, at very low cost. Bitcoin payments are impossible to block
            and safety. Bitcoin is different than any currency you’ve used
            before, so it’s very important to understand some key points. You
            can use them to send or receive any amount of money, with anyone,
            anywhere in the world, at very low cost. Bitcoin payments are
            impossible to block and safety.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About_Section_3;
