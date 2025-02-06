import React from "react";
import { motion } from "motion/react"; // fixed import from 'motion/react' to 'framer-motion'
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
    // { name: "Project", url: "#projects" },
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
    <footer className="bg-gray-800 text-white py-8">
      {/* Animated Name */}
      <motion.span
        className="block text-center text-6xl sm:text-4xl md:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Prasath K
      </motion.span>

      {/* Animated Navigation Links */}
      <motion.ul
        className="flex justify-center gap-10 items-center py-8 text-xl sm:text-lg flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {navLinks.map((nav, index) => (
          <li key={index} className="my-2">
            <a href={nav.url} target="_self" rel="noopener noreferrer">
              {nav.name}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Animated Skills Section */}
      <motion.div
        className="flex justify-around flex-wrap gap-8 px-4 sm:px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-6 sm:h-6" />
            <p className="text-white font-medium text-xl font-display sm:text-sm">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>

      <hr className="max-w-5xl text-center mx-auto my-8" />

      {/* Animated Footer Text */}
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <p className="text-lg sm:text-base">© 2025 Prasath K. All rights reserved.</p>

        {/* Animated Social Links */}
        <div className="mt-4 flex justify-center space-x-4 sm:space-x-3">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 sm:w-6 sm:h-6"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
