"use client"
import { TableOfContentsIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
        <navbar className="flex items-center justify-between py-3">
          <div className="mycontainer flex items-center justify-between w-full">
            <div className="flex items-center md:w-1/3">
              <img src="/Logo.svg" alt="Header Logo" className="w-50" />
            </div>
            <div className="hidden lg:block md:w-1/3 lg:flex justify-center">
              <nav className="flex items-center gap-8 p-1.5 bg-white">
            <a
              href="/"
              className="relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-700 hover:text-red-700 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Home
            </a>
            <a
              href="/about"
              className="relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-700 hover:text-red-700 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              About
            </a>
            <a
              href="/services"
              className="relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-700 hover:text-red-700 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Services
            </a>
            <a
              href="/contact"
              className="relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-700 hover:text-red-700 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Contact
            </a>
          </nav>
            </div>
           <div className="hidden lg:block md:w-1/3 lg:flex justify-end">
            <button className="rounded-lg bg-[#e7194f] text-white font-semibold hover:bg-[#c20e42] py-4 px-7">Get Quote</button>
           </div>
           <div id="icon" className="flex justify-end items-center lg:hidden">
          <TableOfContentsIcon className="text-red-700 border border-red-700 rounded h-12 w-12 p-3" />
        </div>
        </div>
        </navbar>

  );
};

export default Navbar;
