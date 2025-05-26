import React from "react";
import { motion } from "framer-motion";
import linkedInIcon from "../assets/images/icons/footer/linkedin.svg";
import locationIcon from "../assets/images/icons/footer/location.svg";
import mailIcon from "../assets/images/icons/footer/mail.svg";
import facebookIcon from "../assets/images/icons/footer/socials/facebook.svg";
import instagramIcon from "../assets/images/icons/footer/socials/instagram.svg";
import linkedInSocialsIcon from "../assets/images/icons/footer/socials/linkedin.svg";
import xIcon from "../assets/images/icons/footer/socials/x.svg";

const Footer = () => {
  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
  ];
  const skills = [
    { name: "linkedin.com/in/prasathvjkmr", icon: linkedInIcon },
    { name: "prasathvjkmr@gmail.com", icon: mailIcon },
    { name: "Tamilnadu, India", icon: locationIcon },
  ];
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/prasathvjkmr",
      icon: facebookIcon,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/prasathvjkmr",
      icon: instagramIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prasathvjkmr/",
      icon: linkedInSocialsIcon,
    },
    { name: "X", url: "https://x.com/prasathvjkmr", icon: xIcon },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6 px-4">
      {/* Top Section: Name & Socials */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Name & Tagline */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-4xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Prasath K
          </span>
          <span className="text-lg sm:text-base text-gray-300 font-light">
            Frontend Developer
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-5 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 6 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 shadow-md transition"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-7 h-7 sm:w-6 sm:h-6"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8 max-w-6xl mx-auto" />

      {/* Middle Section: Navigation & Skills */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Navigation */}
        <motion.ul
          className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-lg sm:text-base font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {navLinks.map((nav, idx) => (
            <li key={idx}>
              <a
                href={nav.url}
                className="hover:text-gray-300 transition-colors duration-150"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Skills/Contact */}
        <motion.div
          className="flex flex-col gap-4 items-center md:items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 sm:w-5 sm:h-5"
              />
              <span className="text-gray-200 text-base sm:text-sm break-all">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-8 max-w-6xl mx-auto" />

      {/* Bottom Section: Copyright */}
      <motion.div
        className="text-center text-gray-400 text-sm sm:text-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        © 2025 Prasath K. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
