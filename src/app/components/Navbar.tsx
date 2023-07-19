"use client"
import { Menu } from "antd";
import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const showNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-around items-center w-full py-6">
      <h1 className="font-bold text-blue-500 text-3xl text-shadow">Med Sync Solutions</h1>
      <ul className="items-center w-[50%] justify-around hidden md:flex">
        <a href="p#">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#services">
          <li>Service</li>
        </a>
        <a href="#blog">
          <li>Doctors</li>
        </a>
        <a href="#contract">
          <li>Contacts</li>
        </a>
      </ul>
      <div
        className="md:hidden"
        onClick={showNav}
      >
        {/* {!nav ? (
          <Menu className="text-white cursor-pointer" />
        ) : (
          <Time className="text-white cursor-pointer" />
        )} */}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : " md:hidden absolute w-full mt-72 bg-[#2e2e37] bg-opacity-70"
        }
      >
        <li className="p-2 border-b-[1px] w-full">Home</li>
        <li className="p-2 border-b-[1px] w-full">About</li>
        <li className="p-2 border-b-[1px] w-full">Service</li>
        <li className="p-2 border-b-[1px] w-full">Doctors</li>
        <li className="p-2 border-b-[1px] w-full">Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;
