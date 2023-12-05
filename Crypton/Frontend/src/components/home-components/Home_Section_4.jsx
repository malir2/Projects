import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

function Home_Section_4() {
  return (
    <div className="h-auto bg-third py-[50px] md:mt-[400px] sm:mt-[100px] sm:w-full overflow-hidden">
      <motion.div
        initial={{ y: "20vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-center text-primary font-secondary sm:text-sm">
          ROADMAP
        </h1>
        <h1 className="text-center sm:text-4xl text-gray-950 text-5xl font-secondary mt-[20px] font-extrabold">
          The Timeline
        </h1>
        <p className="text-center mt-[20px] text-gray-500 text-sm sm:text-[8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
      </motion.div>
      <motion.div
        initial={{ x: "-70vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <motion.div className="w-[90%] h-[400px] mx-auto flex items-center justify-center mt-[20px] overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-primary/50 scrollbar-thumb-rounded-xl">
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  February 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  March 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="text-primary font-semibold">
                  April 2022
                </Timeline.Time>

                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home_Section_4;
