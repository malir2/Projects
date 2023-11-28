import React from "react";

function Footer() {
  return (
    <footer>
      <div className="h-auto py-[100px] items-center flex dark:bg-secondary bg-[#009999] sm:hidden">
        <div className="flex items-center justify-around lg:flex-col lg:justify-center lg:items-center lg:gap-[50px]">
          <div className="flex flex-col w-[40%] ml-[50px] sm:w-[90%]">
            <h1 className="text-6xl font-bold dark:text-primary text-white sm:text-3xl">
              Logo
            </h1>
            <p className="text-sm text-gray-700 dark:text-gray-500 mt-5 sm:text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br /> elit. Architecto, possimus.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-[100px] lg:justify-around w-[50%] lg:w-[80%] mr-[20px]">
            <div className="">
              <h1 className="text-xl text-white dark:text-primary">Products</h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Courses</li>
                <li>CloudLabs</li>
                <li>Skill Paths</li>
                <li>Projects</li>
                <li>Assessments</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                Become an Author
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Become an Author</li>
                <li>Become an Affliate</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                Pricing
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>For Individuals</li>
                <li>Try for Free</li>
              </ul>
            </div>

            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                Resources
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Blog</li>
                <li>Webinars</li>
                <li>Answers</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                Legal
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Term of Services</li>
                <li>Business Terms of Services</li>
                <li>Data Processing Agreement</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                About Us
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Our Team</li>
                <li>Careers</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-xl text-white dark:text-primary sm:text-lg">
                More
              </h1>
              <ul className="text-sm flex flex-col gap-2 text-gray-700 dark:text-gray-500 sm:text-[10px]">
                <li>Learn to code</li>
                <li>GotHub Students Scholarship</li>
                <li>Explore Catalog</li>
                <li>Early Access Courses</li>
                <li>Earn Referral Credits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 h-[50px] w-full dark:bg-secondary bg-[#009999] flex items-center justify-between">
        <div>
          <p className="text-sm ml-[20px] text-gray-800 dark:text-gray-500 sm:text-[6px]">
            Copyright ©2023 Educative, Inc. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-[50px] sm:gap-[10px] mr-[20px]">
          <svg
            className="fill-black dark:fill-primary h-[20px] sm:h-[10px] font-bold"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            strokeWidth="2"
            viewBox="0 0 1920 1920"
          >
            <path
              className="font-bold"
              d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            className="h-[20px] fill-black dark:fill-primary sm:h-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 1920 1920"
            strokeWidth="2"
          >
            <path
              strokeWidth="2"
              d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            className="w-[24px] dark:stroke-primary sm:h-[10px] stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="dark:stroke-primary stroke-black"
              d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
              strokeWidth="1"
            />
            <circle
              cx="16.5"
              cy="7.5"
              r="1.5"
              className="dark:stroke-primary stroke-black"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              strokeWidth="1"
              className="dark:stroke-primary stroke-black"
            />
          </svg>
          <svg
            className="h-[20px] dark:fill-primary sm:h-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 31.812 26"
          >
            <path d="M20.877,2.000 C22.519,2.000 24.382,2.652 25.426,3.738 C26.724,3.486 27.949,3.025 29.050,2.386 C28.625,3.687 27.718,4.779 26.540,5.469 C27.693,5.332 28.797,5.035 29.820,4.590 C29.054,5.707 28.087,6.690 26.971,7.477 C26.981,7.715 26.987,7.955 26.987,8.195 C26.987,15.562 21.445,24.000 10.939,24.000 C7.715,24.000 4.507,23.133 1.982,21.551 C2.428,21.605 2.883,21.631 3.343,21.631 C6.019,21.631 8.482,20.740 10.439,19.242 C7.937,19.199 5.827,17.586 5.103,15.373 C5.450,15.437 5.810,15.473 6.178,15.473 C6.696,15.473 7.203,15.406 7.681,15.277 C5.068,14.768 3.100,12.514 3.100,9.813 C3.100,9.787 3.100,9.764 3.100,9.740 C3.871,10.158 4.750,10.410 5.687,10.440 C4.154,9.437 3.147,7.734 3.147,5.799 C3.147,4.777 3.428,3.818 3.919,2.998 C6.735,6.367 10.945,8.588 15.693,8.822 C15.594,8.414 15.543,7.984 15.543,7.553 C15.543,4.473 17.721,2.000 20.877,2.000 M29.820,4.590 L29.825,4.590 M20.877,-0.000 C17.033,-0.000 14.060,2.753 13.614,6.552 C10.425,5.905 7.524,4.204 5.440,1.711 C5.061,1.257 4.503,0.998 3.919,0.998 C3.867,0.998 3.815,1.000 3.763,1.004 C3.123,1.055 2.547,1.413 2.216,1.966 C1.525,3.122 1.159,4.447 1.159,5.799 C1.159,6.700 1.321,7.579 1.625,8.400 C1.300,8.762 1.113,9.238 1.113,9.740 L1.113,9.813 C1.113,11.772 1.882,13.589 3.160,14.952 C3.087,15.294 3.103,15.655 3.215,15.998 C3.657,17.348 4.459,18.510 5.499,19.396 C4.800,19.552 4.079,19.631 3.343,19.631 C2.954,19.631 2.577,19.609 2.222,19.565 C2.141,19.556 2.061,19.551 1.981,19.551 C1.148,19.551 0.391,20.078 0.108,20.886 C-0.202,21.770 0.140,22.753 0.932,23.249 C3.764,25.023 7.318,26.000 10.939,26.000 C17.778,26.000 22.025,22.843 24.383,20.195 C27.243,16.984 28.907,12.718 28.972,8.455 C29.899,7.682 30.717,6.790 31.410,5.792 C31.661,5.458 31.810,5.041 31.810,4.590 C31.810,3.909 31.473,3.308 30.958,2.946 C31.181,2.176 30.925,1.342 30.303,0.833 C29.940,0.537 29.496,0.386 29.049,0.386 C28.708,0.386 28.365,0.474 28.056,0.654 C27.391,1.040 26.680,1.344 25.931,1.562 C24.555,0.592 22.688,-0.000 20.877,-0.000 L20.877,-0.000 Z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
