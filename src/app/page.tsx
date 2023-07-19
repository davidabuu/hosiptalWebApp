import React from "react";
import Navbar from "./components/Navbar";
import "typeface-montserrat";
import "./globals.css";
import Intro from "./components/Intro";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="img-bg bg-cover bg-center  h-screen">
        <Intro />
      </div>
    </div>
  );
};

export default LandingPage;
