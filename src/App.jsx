import React from "react";
import "./App.css";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import OurWork from "./pages/our-work";
import WhyUs from "./pages/why-us";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
