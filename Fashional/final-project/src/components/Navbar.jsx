"use client";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import Image from "../assets/shopping-bag.png";

import { useSelector } from "react-redux";

export default function NavbarWithCTAButton() {
  const count = useSelector((state) => state.cartItem.value);
  return (
    <Navbar fluid className="bg-transparent dark:bg-transparent">
      <Navbar.Brand to="/">
        <Link to="/">
          <div className="flex items-center ">
            <img
              src={Image}
              alt="logo"
              className="drop-shadow-md w-10 max-sm:w-7 max-sm:h-7"
            />
            <p className="text-3xl font-bold text-emerald-400 max-sm:text-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">
              Fashio<span className="text-black dark:text-white">nal</span>
            </p>
          </div>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/cart" className="relative mr-3">
          <svg
            className="mt-0.5 dark:fill-gray-400 fill-gray-900 "
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="38px"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {count.length}
          </div>
        </Link>

        <DarkThemeToggle className="bg-white dark:bg-transparent" />
        <Navbar.Toggle className="bg-white ml-1.5" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link
            to="/"
            className=" transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400 "
          >
            <p>Home</p>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/shop"
            className="transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400  "
          >
            <p>Shop</p>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/contact"
            className="transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400 "
          >
            <p>Contact</p>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/about"
            className="transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400 "
          >
            <p>About</p>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/login"
            className="transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400"
          >
            <p>Login</p>
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link
            to="/signup"
            className="transition-all hover:text-black dark:hover:text-emerald-400  text-md dark:text-gray-400"
          >
            <p>Sign up</p>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
