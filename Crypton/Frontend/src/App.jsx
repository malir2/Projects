import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Token_Sale from "./components/Token_Sale";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Rodmap from "./components/Rodmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/token-sale" element={<Token_Sale />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/features" element={<Features />}></Route>
        <Route path="/roadmap" element={<Rodmap />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
