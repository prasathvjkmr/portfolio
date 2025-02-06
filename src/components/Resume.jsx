import { motion } from "motion/react";
import resumePdf from "../assets/pdf/Prasath-frontend-developer.pdf";

export default function Resume() {
  return (
    <section className="container my-8" id="resume">
      <div className="flex flex-col items-center">
        {/* Animated text */}
        <motion.p
          className="my-4 text-black-600 font-display text-3xl max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Want the details on my journey as a Front-End Developer? Grab my
          resume and explore my skills, experience, and projects in depth.
        </motion.p>

        {/* Animated button */}
        <motion.a
          href={resumePdf}
          target="_blank"
          className="bg-teal-500 px-8 py-2 rounded hover:bg-teal-400 flex gap-4 font-mono font-bold text-2xl text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <i className="bi bi-download"></i>
          Resume
        </motion.a>
      </div>
    </section>
  );
}
