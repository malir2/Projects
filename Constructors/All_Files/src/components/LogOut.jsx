import React from "react";

function LogOut() {
  return (
    <div className="h-screen bg-primary">
      <div className="w-full bg-primary">
        <section class="text-gray-600 body-font  w-[60%] md:w-[90%] mx-auto">
          <div class="container px-5 py-24 mx-auto ">
            <div class=" dark:bg-gray-900 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-emerald-400">
                Sign Up
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-600 dark:text-emerald-400"
                >
                  User Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white dark:bg-gray-600 dark:text-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-600 dark:text-emerald-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white dark:bg-gray-600 dark:text-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="message"
                  class="leading-7 text-sm text-gray-600 dark:text-emerald-400"
                >
                  Password
                </label>
                <input
                  id="message"
                  name="message"
                  class="w-full bg-white dark:bg-gray-600 dark:text-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white border-0 py-2 px-6 focus:outline-none bg-primary rounded text-lg">
                Sign Up
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LogOut;
