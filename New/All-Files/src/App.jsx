import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Favourite from "./components/Favourite";
import Contact from "./components/Contact";
import Feature_Profiles from "./components/Feature_Profiles";
import Marriage_Hall from "./components/Marriage_Hall";
import Marquee from "./components/Marquee";
import Jewellers from "./components/Jewellers";
import Caterers from "./components/Caterers";
import Car from "./components/Car_Rental_Service";
import Decoration from "./components/Decoration";
import Nikkah_Khawan from "./components/Nikkah_Khawan";
import Event_Planner from "./components/Event_Planner";
import Boutique from "./components/Boutique";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favourite-profiles" element={<Favourite />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/feature-profiles" element={<Feature_Profiles />}></Route>
        <Route path="/marriage-hall" element={<Marriage_Hall />}></Route>
        <Route path="/marquee" element={<Marquee />}></Route>
        <Route path="/jewellers" element={<Jewellers />}></Route>
        <Route path="/caterers" element={<Caterers />}></Route>
        <Route path="/car-rental-service" element={<Car />}></Route>
        <Route path="/decoration" element={<Decoration />}></Route>
        <Route path="/nikkah-khawan" element={<Nikkah_Khawan />}></Route>
        <Route path="/event-planner" element={<Event_Planner />}></Route>
        <Route path="/boutique" element={<Boutique />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
