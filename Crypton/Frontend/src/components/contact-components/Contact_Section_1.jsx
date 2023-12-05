import React from "react";
import { motion } from "framer-motion";

function Contact_Section_1() {
  return (
    <div className="bg-white py-[50px]">
      <div className="flex lg:flex-col lg:gap-[40px] justify-between w-[90%] mx-auto pt-[100px] ">
        <motion.div
          initial={{ x: "-40vw", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, transition: 1 }}
          viewport={{ once: true }}
          className="w-[50%] lg:w-[90%]"
        >
          <h1 className="text-4xl font-secondary font-bold">Contact Us</h1>
          <p className="mt-[10px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. dolore
            eu fugiat nulla pariatur.
          </p>
          <div className="flex flex-col mt-[30px] gap-[30px]">
            <motion.div className="flex items-center gap-[20px]">
              <svg
                className="h-[40px]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                    fill="#0F0F0F"
                    className="fill-primary"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="font-secondary text-gray-600">+91 123 456 789</h1>
            </motion.div>
            <motion.div className="flex items-center gap-[20px]">
              <svg
                className="h-[40px] stroke-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M13 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.0799 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V13M3 8L8.45036 11.6336C9.73296 12.4886 10.3743 12.9162 11.0674 13.0824C11.6804 13.2293 12.3196 13.2293 12.9326 13.0824C13.6257 12.9162 14.267 12.4886 15.5496 11.6336M22 6.5C22 7.88071 20.8807 9 19.5 9C18.1193 9 17 7.88071 17 6.5C17 5.11929 18.1193 4 19.5 4C20.8807 4 22 5.11929 22 6.5Z"
                    stroke="#000000"
                    className="stroke-primary"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <h1 className="font-secondary text-gray-600">xyz@gmail.com</h1>
            </motion.div>
            <div className="flex items-center gap-[20px]">
              <svg
                fill="#000000"
                className="h-[40px] fill-primary"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                </g>
              </svg>
              <h1 className="font-secondary text-gray-600">
                Headley Ln, Dorking RH5 6DF, UK 7M7P+96 Leatherhead, United
                Kingdom
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "40vh", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, transition: 1 }}
          viewport={{ once: true }}
          className="w-[50%] lg:w-[90%]"
        >
          <h1 className="text-4xl font-secondary font-bold text-center">
            Leave Message Here
          </h1>
          <div className="flex justify-between mt-[50px] flex-wrap gap-[20px] lg:gap-[5px]">
            <input
              type="text"
              className="border-none bg-gray-300 rounded-lg p-2 w-[48%] h-[50px]"
              placeholder="Name*"
            />
            <input
              type="text"
              className="border-none bg-gray-300 rounded-lg p-2 w-[48%] h-[50px]"
              placeholder="Email*"
            />
            <input
              type="text"
              className="border-none bg-gray-300 rounded-lg p-2 w-[48%] h-[50px]"
              placeholder="Subject*"
            />
            <input
              type="text"
              className="border-none bg-gray-300 rounded-lg p-2 w-[48%] h-[50px]"
              placeholder="Phone*"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border-none bg-gray-300 rounded-lg p-2 w-full"
              placeholder="Phone*"
            ></textarea>
            <button className="text-white bg-primary font-semibold h-[44px] w-[127px] rounded-lg hover:translate-y-[-5px] transition-all hover:shadow-[0px_20px_29px_-17px_#16d5ffFF]  ">
              SIGN IN
            </button>
          </div>
        </motion.div>
      </div>
      <motion.section
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <iframe
          className="w-[90%] mx-auto pt-[100px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.33557226161!2d74.27633209999999!3d31.43247365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1701695847424!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.section>
    </div>
  );
}

export default Contact_Section_1;
