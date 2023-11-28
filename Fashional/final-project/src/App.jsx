import DefaultNavbar from "./components/Navbar";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Sign-up";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <Flowbite>
        <BrowserRouter>
          <DefaultNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Flowbite>
    </>
  );
}
