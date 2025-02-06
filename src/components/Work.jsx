import React from "react";
import { motion } from "motion/react";

export default function Work() {
  return (
    <section className="container py-16 bg-gray" id="work">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-semibold text-center mb-12 text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Work
      </motion.h2>

      {/* Three Vertical Columns */}
      <div className="flex flex-wrap justify-center gap-8 lg:flex-row md:flex-col sm:flex-col">
        {/* B2C Section */}
        <motion.div
          className="my-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-black rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-40 bg-gray-800 rounded-t-xl">
            {/* Placeholder for image or content */}
          </div>
          <span className="block text-center bg-green-500 text-white py-2 font-semibold font-mono rounded-b-xl">
            B2C
          </span>
          <motion.p
            className="p-4 text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creating engaging, user-centric experiences for individual consumers
            through intuitive designs, seamless shopping experiences, and
            responsive layouts.
          </motion.p>
        </motion.div>

        {/* B2B Section */}
        <motion.div
          className="my-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-black rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-40 bg-gray-800 rounded-t-xl">
            {/* Placeholder for image or content */}
          </div>
          <span className="block text-center bg-green-500 text-white py-2 font-semibold font-mono rounded-b-xl">
            B2B
          </span>
          <motion.p
            className="p-4 text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Developing scalable, efficient solutions to help businesses enhance
            their operations, improve internal communication, and drive growth.
          </motion.p>
        </motion.div>

        {/* B2C & B2B Section */}
        <motion.div
          className="my-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-black rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-40 bg-gray-800 rounded-t-xl">
            {/* Placeholder for image or content */}
          </div>
          <span className="block text-center bg-green-500 text-white py-2 font-semibold font-mono rounded-b-xl">
            B2C & B2B
          </span>
          <motion.p
            className="p-4 text-center text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hybrid solutions that cater to both businesses and consumers, offering
            tools that serve both individual users and enterprise-level systems.
          </motion.p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center my-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="my-4 text-lg text-gray-800 dark:text-white">
          Got a project, an idea, or just want to say hi? 🙋‍♂️ I’d love to hear
          from you! Whether it’s building something awesome together or chatting
          about the latest tech, feel free to reach out.
        </p>
        <a
          href="#contact"
          className="px-8 py-2 bg-green-500 text-white rounded-full text-xl hover:bg-green-700 transition"
        >
          Let’s Talk!
        </a>
      </motion.div>
    </section>
  );
}
