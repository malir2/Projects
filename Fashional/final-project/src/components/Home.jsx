import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./counter";
import { Rating } from "flowbite-react";
import { Alert } from "flowbite-react";
function Home() {
  const dispatch = useDispatch();

  const URL = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Alert
        className="hidden w-full fixed bottom-0 z-10 "
        id="alert"
        color="success"
        withBorderAccent
        onDismiss={() => {
          document.getElementById("alert").style.display = "none";
        }}
      >
        <span>
          <p>
            <span className="font-medium">Info! </span>
            Item is added to your cart.
          </p>
        </span>
      </Alert>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Before they sold out
            </h1>
            <p class="mb-8 leading-relaxed dark:text-gray-400">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <Link to="/shop">
                <button class=" transition-all hover:scale-105 hover:drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)] inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg dark:bg-emerald-400 dark:hover:bg-emerald-700">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center  max-md:hidden max-sm:hidden drop-shadow-[8px_8px_5px_rgba(0,0,0,0.5)]"
              alt="hero"
              src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font dark:bg-slate-600 bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="drop-shadow-[6px_6px_5px_rgba(0,0,0,0.5)] "
              src="https://image.made-in-china.com/44f3j00NwkhupetlsoM/Men-s-Spring-High-Quality-Cotton-Custom-Clothing-T-Shirt-Blanks-Apparel-Sports-Wear-Brand-Digital-Brand-Logo-Print-Embroidery-Wholesale-Low-Price.webp"
              alt=""
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Our Most Selling
              <br />
              <span class=" lg:inline-block">Brands</span>
            </h1>
            <p class="mb-8 leading-relaxed dark:text-gray-800 font-medium">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
      <div class="mt-8">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center dark:text-white">
          Most Selling Products
        </h1>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 ">
              {data.slice(0, 3).map((e) => {
                const { id, title, price, image, category, rating } = e;
                return (
                  <div key={id} class="p-4 md:w-1/3">
                    <div class="h-full  bg-white dark:bg-gray-800 rounded-lg overflow-hidden drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]">
                      <div className="w-full bg-white">
                        <img
                          class="lg:h-72 md:h-56 w-2/3 mx-auto object-cover object-center "
                          src={image}
                          alt="blog"
                        />
                      </div>
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-400">
                          {category}
                        </h2>
                        <h1 class="title-font h-12 text-lg font-medium text-gray-900 mb-3 dark:text-white">
                          {title}
                        </h1>
                        <p class="leading-relaxed mb-3 h-42 dark:text-gray-400">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Sunt similique perspiciatis vero repudiandae
                          natus. Obcaecati, voluptate reiciendis illum ipsum
                          fugiat laboriosam nemo molestiae omnis, dignissimos
                          quam, quis est consectetur incidunt.
                        </p>
                        <Rating>
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star filled={false} />
                          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            {rating.rate} out of 5
                          </p>
                        </Rating>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                          Price: {price}
                        </h1>
                        <div class="flex items-center flex-wrap ">
                          <button
                            onClick={() => {
                              document.getElementById("alert").style.display =
                                "block";
                              dispatch(addToCart(e));
                            }}
                            class="transition-all hover:scale-105 hover:drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)] bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-emerald-700 dark:bg-emerald-400 rounded py-2 px-2 text-white inline-flex items-center md:mb-2 lg:mb-0 dark:text-black"
                          >
                            Add to Cart
                            <svg
                              className="ml-1.5 fill-white dark:fill-black"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
                            </svg>
                          </button>
                          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              class="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <section class="text-gray-600 body-font bg-white dark:bg-slate-600">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center dark:text-white">
            Our Customers Review
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-200 p-8 rounded dark:bg-gray-900 drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900 dark:text-white">
                      John Bolt
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-200 p-8 rounded dark:bg-gray-900 drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://wallpapers.com/images/hd/aesthetic-profile-picture-s2kt74v43aheaxmw.jpg"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900 dark:text-white">
                      Simi Lira
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Home;
