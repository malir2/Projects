import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./counter";
import { Rating } from "flowbite-react";

function Shop() {
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
    <div>
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
      <form className="w-1/2 mx-auto my-8 rounded-lg overflow-hidden drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-emerald-400"
            placeholder="Search....."
            required
          />
          <button
            id="submit"
            type="submit"
            className=" text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-400 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
          >
            Search
          </button>
        </div>
      </form>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.slice(0, 4).map((e) => {
              const { id, title, price, image, category, rating } = e;

              return (
                <div key={id} className="p-4 md:w-1/3">
                  <div className="h-full  bg-white dark:bg-gray-800  rounded-lg overflow-hidden drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]">
                    <div className="w-full bg-white">
                      <img
                        className="lg:h-72 md:h-56 w-2/3 mx-auto object-cover object-center"
                        src={image}
                        alt="blog"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-400">
                        {category}
                      </h2>
                      <h1 className="title-font h-12 text-lg max-lg:h-20  font-medium text-gray-900 mb-3 dark:text-white">
                        {title}
                      </h1>
                      <p className="leading-relaxed mb-3 h-42  overflow-auto dark:text-gray-400">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
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
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                        Price: {price}
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <button
                          onClick={() => {
                            document.getElementById("alert").style.display =
                              "block";
                            dispatch(addToCart(e));
                          }}
                          className="transition-all hover:scale-105 hover:drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]  bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-emerald-700 dark:bg-emerald-400 rounded py-2 px-2 text-white inline-flex items-center md:mb-2 lg:mb-0 dark:text-black"
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
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
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
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
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
            {data.slice(14, 19).map((e) => {
              const { id, title, price, image, category, rating } = e;
              return (
                <div key={id} className="p-4 md:w-1/3  ">
                  <div className="h-full  bg-white dark:bg-gray-800  rounded-lg overflow-hidden drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)] ">
                    <div className="w-full bg-white">
                      <img
                        className="lg:h-72 md:h-56 w-2/3 mx-auto object-cover object-center"
                        src={image}
                        alt="blog"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest  text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-400">
                        {category}
                      </h2>
                      <h1 className="title-font text-lg h-14 max-sm:h-24 max-lg:h-28 font-medium text-gray-900 mb-3 dark:text-white">
                        {title}
                      </h1>
                      <p className="leading-relaxed mb-3 h-42 max-sm:h-40 max-lg:h-72 dark:text-gray-400 overflow-auto">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
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
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
                        Price: {price}
                      </h1>
                      <div className="flex items-center flex-wrap ">
                        <button
                          onClick={() => {
                            document.getElementById("alert").style.display =
                              "block";
                            dispatch(addToCart(e));
                          }}
                          className="transition-all hover:scale-105 hover:drop-shadow-[10px_20px_20px_rgba(0,0,0,0.5)]  bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-emerald-700 dark:bg-emerald-400 rounded py-2 px-2 text-white inline-flex items-center md:mb-2 lg:mb-0 dark:text-black"
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

                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
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
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
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
  );
}

export default Shop;
