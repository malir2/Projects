import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Explore from "./components/Explore";

function App() {
  return (
    <Flowbite>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/prices" element={<Pricing />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
