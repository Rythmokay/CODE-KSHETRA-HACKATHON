// App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Appointments from "./Appointments";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add other Route components for additional pages */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
