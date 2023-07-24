"use client"
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "typeface-montserrat";
import "./globals.css";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos"; // Import the AOS libra
import Intro from "./components/Intro";
import About from "./components/About";
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="img-bg bg-cover bg-center  h-screen">
        <Intro />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default LandingPage;
