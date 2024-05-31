import React from "react";
import Navbar from "./componets/inc/Navbar";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
