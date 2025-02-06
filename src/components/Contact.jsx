import React from "react";
import { motion } from "motion/react";
import linkedInIcon from "../assets/images/contact/linkedin.svg";
import githubIcon from "../assets/images/contact/github.svg";
import mailIcon from "../assets/images/contact/mail.svg";

const Contact = () => {
  const contactDetails = [
    {
      name: "linkedin.com/in/prasathvjkmr",
      url: "https://www.linkedin.com/in/prasathvjkmr/",
      icon: linkedInIcon,
    },
    {
      name: "github.com/prasathvjkmr",
      url: "https://github.com/prasathvjkmr",
      icon: githubIcon,
    },
    {
      name: "prasathvjkmr@gmail.com",
      url: "mailto:prasathvjkmr@gmail.com",
      icon: mailIcon,
    },
  ];

  return (
    <section className="py-12 bg-midnight" id="contact">
      <div className="container mx-auto text-center px-8 sm:px-16">
        <motion.div
          className="flex justify-center flex-wrap gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {contactDetails.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={contact.icon}
                alt={`${contact.name} icon`}
                className="w-8 h-8 sm:w-10 sm:h-10"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span className="text-white font-medium font-display text-lg sm:text-xl">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
