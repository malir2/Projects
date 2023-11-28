import React from "react";
import Navbar from "./Navbar";
import Product_section from "./product_components/Product_section";
import Footer from "./Footer";

function Products() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-red-600">
      <div className="w-[90%] mx-auto">
        <Navbar />
        <div className="flex justify-center mt-[30px]">
          <input
            type="text"
            placeholder="Search...."
            className="w-[50%] h-[40px] rounded-3xl border-none pt-2 pb-2 pl-7 bg-gray-700 text-red-400 tracking-wider caret-red-600 sm:w-[70%] xsm:w-[70%] xsm:h-[20px] xsm:p-2 xsm:text-xs"
          />
          <button className="ml-4 bg-red-600 p-2 rounded-[22px] w-[100px] h-[40px] xsm:w-[20%] xsm:h-[20px] hover:scale-110 sm:p-1 xsm:text-[10px]">
            Search
          </button>
        </div>
        <Product_section />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
