"use client";

import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])
    

    return (
      <nav className="fixed w-full z-40 h-20 backdrop-blur-lg border-b border-amber-50/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 relative h-full flex items-center">
          {/* Left Logo */}
          <a href="#home" className="text-gray-500 font-bold text-2xl hover:text-amber-50 transition-colors absolute left-4 md:static">
            a
          </a>
    
          {/* Centered Nav Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            <a href="#home" className="text-gray-500 font-bold text-2xl hover:text-amber-50 transition-colors">
              HOME
            </a>
            <a href="#about" className="text-gray-500 font-bold text-2xl hover:text-amber-50 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-500 font-bold text-2xl hover:text-amber-50 transition-colors">
              Projects
            </a>
          </div>
    
          {/* Hamburger for Mobile */}
          <div
            className="w-5 h-4 cursor-pointer absolute right-4 md:hidden z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </nav>
    );
}

export default Navbar
