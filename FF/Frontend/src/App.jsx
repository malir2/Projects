import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing_Page from "./components/Landing_Page";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_Page />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
