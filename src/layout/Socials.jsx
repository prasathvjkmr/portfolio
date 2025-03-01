import React from "react";
import { motion } from "motion/react";

export default function Socials() {
  const linkData = [
    {
      hrefLink: "https://github.com/prasathvjkmr",
      iconName: "github",
    },
    {
      hrefLink: "https://www.linkedin.com/in/prasathvjkmr/",
      iconName: "linkedin",
    },
    {
      hrefLink:
        "mailto:prasathvjkmr@gmail.com?subject=Hello%20from%20My%20Portfolio&body=Thank%20you%20for%20visiting%20my%20portfolio%20website.%20Feel%20free%20to%20reach%20out%20if%20you%20have%20any%20questions%20or%20would%20like%20to%20collaborate!",
      iconName: "envelope-fill",
    },
  ];

  return (
    <div className="container fixed left-8 top-1/2 transform -translate-y-1/2 flex items-center w-auto z-50">
      <ul className="flex flex-col items-center">
        {linkData.map((socialLink, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger the animation delay
          >
            <a
              href={socialLink.hrefLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${socialLink.iconName} profile`}
              className="hover:text-teal-500 text-center"
            >
              <motion.i
                className={`bi bi-${socialLink.iconName} text-2xl w-8 text-black block rounded-md bg-teal-500`}
                whileHover={{ scale: 1.2 }} // Hover effect: scale the icon
                transition={{ duration: 0.3 }}
              ></motion.i>
            </a>
            {/* Add a vertical divider '|' between icons */}
            {index < linkData.length - 1 && (
              <span className="block h-full font-bold scale-y-125 text-teal-500 text-center leading-10">
                |
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
