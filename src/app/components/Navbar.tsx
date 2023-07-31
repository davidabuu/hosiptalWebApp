"use client";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b-2 border-gray-400 p-4 z-50">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-blue-500 text-2xl md:text-3xl">
          Med Sync Solutions
        </h1>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <MenuOutlined
            className="text-blue-500 cursor-pointer"
            onClick={showNav}
          />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#doctors">DOCTORS</a>
          </li>
          <li>
            <Link href="/sign-up">LOGIN</Link>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex flex-col" : "hidden"
        } md:hidden absolute top-full left-0 right-0 bg-[#202036] bg-opacity-70 py-4`}
      >
        <li className="p-2 text-white border-b-[1px]">Home</li>
        <li className="p-2 text-white border-b-[1px]">About</li>
        <li className="p-2 text-white border-b-[1px]">Service</li>
        <li className="p-2 text-white border-b-[1px]">Doctors</li>
        <li className="p-2 text-white border-b-[1px]">Login</li>

        <li className="p-2 text-white">Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
