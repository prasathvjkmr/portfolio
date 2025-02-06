'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import resumePdf from "../assets/pdf/Prasath-frontend-developer.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkData = [
    { hrefLink: '#about', textContent: 'About me' },
    { hrefLink: '#skills', textContent: 'Skills' },
    { hrefLink: '#experience', textContent: 'Experience' },
    // { hrefLink: '#work', textContent: 'Work' },
    { hrefLink: '#contact', textContent: 'Contact' },
  ];

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4 px-6 md:px-20">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Prasath K
        </motion.h1>
        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        <nav className="hidden md:flex space-x-4 items-center gap-8">
          {linkData.map((navLink, index) => (
            <motion.a
              key={index}
              href={navLink.hrefLink}
              className="hover:text-teal-400 font-display"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {navLink.textContent}
            </motion.a>
          ))}
          <motion.a
            href={resumePdf}
            target="_blank"
            className="bg-teal-500 px-5 py-2 rounded hover:bg-transparent hover:outline hover:outline-offset-0 transition hover:outline-green hover:text-green flex gap-4 font-mono text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Resume
          </motion.a>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col space-y-4 py-6 text-center"
          >
            {linkData.map((navLink, index) => (
              <motion.a
                key={index}
                href={navLink.hrefLink}
                className="block text-lg font-medium hover:text-teal-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {navLink.textContent}
              </motion.a>
            ))}
            <motion.a
              href={resumePdf}
              target="_blank"
              className="bg-teal-500 px-5 py-2 rounded hover:bg-transparent hover:outline hover:outline-offset-0 transition hover:outline-green hover:text-green font-mono text-xl font-bold mx-auto"
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
