import React from "react";
import { motion } from "motion/react"; // Import motion from Framer Motion
import Avatar from "../assets/images/avatar.jpg";

const Hero = () => {
  return (
    <motion.section
      className="text-center py-16 pt-24"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl text-gray"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Hi, I am
      </motion.h2>

      {/* Name with spring effect */}
      <motion.h1
        className="text-6xl font-bold text-green font-mono"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        Prasath
      </motion.h1>

      {/* Profile Image with hover animation */}
      <motion.img
        src={Avatar}
        alt="Prasath Avatar"
        className="mx-auto w-[40dvh] h-[40dvh] rounded-full my-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      />

      {/* Titles with staggered animation */}
      <motion.h3
        className="text-4xl text-midnight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        React Specialist
      </motion.h3>

      <motion.h3
        className="text-6xl text-green font-mono font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Frontend Developer
      </motion.h3>

      {/* Description with staggered animation */}
      <motion.p
        className="mt-4 text-black-600 font-display font-medium text-3xl max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Hi there! 👋 I’m Prasath, Front-End Developer. I turn Tea ☕ and code 🖥️
        into pixel-perfect, web magic. Let's create something fabulous together!
        🚀
      </motion.p>

      <motion.p
        className="mt-4 text-black-600 font-display text-3xl max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Got a design or a bug? Let’s create something fun and fabulous together!
        🚀
      </motion.p>
    </motion.section>
  );
};

export default Hero;
