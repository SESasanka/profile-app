import React from "react";
import Navbar from "./componets/inc/Navbar";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
