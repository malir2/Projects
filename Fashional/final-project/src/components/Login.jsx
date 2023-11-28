import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-col justify-around px-5 py-24 md:flex-row items-center">
        <form class="w-1/2 mx-3 my-6 max-sm:w-10/12">
          <p class="text-gray-900 text-bold mb-12 text-3xl font-bold text-center dark:text-emerald-400 max-sm:text-xl">
            Enter Email and Password carefully!
          </p>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            type="submit"
            class="transition-all hover:scale-105 hover:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-400 dark:hover:bg-emerald-600 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <p class="text-gray-900 mt-2 dark:text-gray-500">
            Don't have any account.{" "}
            <Link
              to="/signup"
              class="text-blue-800 hover:underline dark:text-emerald-400"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
