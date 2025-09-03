'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import InfrathroneLogo from "../../../../public/infrathrone.webp"
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#Courses" },
    { name: "Consulting ", href: "#Consulting" },
    { name: "Community ", href: "#Community " },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      if (open) setOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div 
        className={`relative transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/20' 
            : 'bg-black/70 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={InfrathroneLogo}
              alt="Infrathrone Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-md object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm xl:text-base font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Tablet Navigation (hidden on mobile and desktop) */}
          <div className="hidden md:flex lg:hidden items-center space-x-6">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden lg:flex xl:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced bottom fade effect */}
        <div className="absolute bottom-[-16px] left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-black/70 via-black/40 to-transparent blur-lg"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-base font-medium"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}