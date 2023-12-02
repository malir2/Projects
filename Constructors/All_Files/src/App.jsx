import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import LogOut from "./components/LogOut";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
