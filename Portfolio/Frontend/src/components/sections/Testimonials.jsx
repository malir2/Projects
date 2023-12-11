import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
function Testimonials() {
  const innerDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerDivRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div
      ref={innerDivRef}
      className="h-[500vh] w-full sm:h-auto bg-black text-white sm:pt-[50px] z-20"
    >
      <h1 className=" font-third text-[130px] text-center text-gray-600 opacity-50 sm:text-[40px] top-[100px] w-full z-0">
        Testimonials
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-1 grid-rows-2 md:grid-rows-1 w-[80%] mx-auto gap-[20px] sticky top-[50px] ">
        <motion.div
          style={{ opacity }}
          className="border border-primary bg-gray-800 backdrop-blur-lg p-[20px] rounded-lg"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            quas id! Accusamus eligendi maiores a optio iure quos aperiam
            consectetur reiciendis odio minima, qui numquam vel repellendus
            recusandae molestiae laborum impedit voluptatem vitae eveniet
            dolores doloremque. Ut ab delectus quasi!
          </p>
          <div className="flex items-center gap-2 mt-[30px]">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src="https://bluevistallc.com/wp-content/uploads/2021/09/Brett-Abraham-CCPR9463E-1x1-1-scaled-500x500.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-lg font-primary text-primary">Dennis</h1>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: opacity2 }}
          className="border border-primary bg-gray-800 backdrop-blur-lg p-[20px] rounded-lg"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            quas id! Accusamus eligendi maiores a optio iure quos aperiam
            consectetur reiciendis odio minima, qui numquam vel repellendus
            recusandae molestiae laborum impedit voluptatem vitae eveniet
            dolores doloremque. Ut ab delectus quasi!
          </p>
          <div className="flex items-center gap-2 mt-[30px]">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src="https://liveboldandbloom.com/wp-content/uploads/2022/05/Add_a_little_bit_of_body_text_7-3-e1674809754195-768x538.png"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-lg font-primary text-primary">Mario</h1>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: opacity3 }}
          className="border border-primary bg-gray-800 backdrop-blur-lg p-[20px] rounded-lg"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            quas id! Accusamus eligendi maiores a optio iure quos aperiam
            consectetur reiciendis odio minima, qui numquam vel repellendus
            recusandae molestiae laborum impedit voluptatem vitae eveniet
            dolores doloremque. Ut ab delectus quasi!
          </p>
          <div className="flex items-center gap-2 mt-[30px]">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?b=1&s=612x612&w=0&k=20&c=jIlBJzxPiqpROW_F-CsYMHscAcwBqUsrv72uFKwqvlc="
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-lg font-primary text-primary">Adam</h1>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: opacity4 }}
          className="border border-primary bg-gray-800 backdrop-blur-lg p-[20px] rounded-lg"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            quas id! Accusamus eligendi maiores a optio iure quos aperiam
            consectetur reiciendis odio minima, qui numquam vel repellendus
            recusandae molestiae laborum impedit voluptatem vitae eveniet
            dolores doloremque. Ut ab delectus quasi!
          </p>
          <div className="flex items-center gap-2 mt-[30px]">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src="https://www.shutterstock.com/image-photo/successful-senior-man-folded-arms-260nw-1381465043.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <h1 className="text-lg font-primary text-primary">Mark</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
