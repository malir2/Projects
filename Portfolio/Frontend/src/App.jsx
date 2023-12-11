import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from "./components/Landing_Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
