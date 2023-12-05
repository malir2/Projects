import React from "react";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";

function Roadmap_Section_2() {
  return (
    <div className="h-auto bg-white py-[50px] md:mt-[400px] sm:mt-[100px] sm:w-full overflow-hidden">
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

export default Roadmap_Section_2;
