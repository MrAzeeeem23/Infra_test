"use client";

import React from "react";
import Image from "next/image";
import InfraThrone from "../../../../public/infrathrone.webp";

function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Image
            src={InfraThrone}
            alt="Logo"
            width={90}
            height={90}
            className="rounded-md"
          />
          <p className="text-sm text-gray-500 max-w-xs">
            Building the future of DevOps training and infrastructure leadership.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <a href="#about" className="hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="#assets" className="hover:text-orange-400 transition-colors">
            Assets
          </a>
          <a href="#newsletter" className="hover:text-orange-400 transition-colors">
            Newsletter
          </a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>

      <div className="text-xs text-gray-500 flex justify-center px-4 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Infrathrone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
