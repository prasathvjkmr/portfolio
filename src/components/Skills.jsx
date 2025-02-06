import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Import motion & AnimatePresence
import Marquee from "react-fast-marquee";
import htmlIcon from "../assets/images/skills/html.svg";
import cssIcon from "../assets/images/skills/css.svg";
import sassIcon from "../assets/images/skills/sass.svg";
import bootstrapIcon from "../assets/images/skills/bootstrap.svg";
import tailwindIcon from "../assets/images/skills/tailwind.svg";
import materialIcon from "../assets/images/skills/material-ui.svg";
import javascriptIcon from "../assets/images/skills/javascript.svg";
import jqueryIcon from "../assets/images/skills/jquery.svg";
import reactIcon from "../assets/images/skills/react.svg";
import viteIcon from "../assets/images/skills/vite.svg";
import nextIcon from "../assets/images/skills/next.svg";
import remixIcon from "../assets/images/skills/remix.svg";
import styledcomponentIcon from "../assets/images/skills/styled-components.svg";
import semanticuiIcon from "../assets/images/skills/semantic-ui.svg";
import antdesignIcon from "../assets/images/skills/ant-design.svg";
import gatsbyIcon from "../assets/images/skills/gatsby.svg";
import gitIcon from "../assets/images/skills/git.svg";
import vscodeIcon from "../assets/images/skills/vs-code.svg";

const Skills = () => {
  const [showAll, setShowAll] = useState(false); // Track if "View All" is clicked

  const skills = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "SASS", icon: sassIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Material UI", icon: materialIcon },
    { name: "JAVASCRIPT", icon: javascriptIcon },
    { name: "JQUERY", icon: jqueryIcon },
    { name: "REACT JS", icon: reactIcon },
    { name: "VITE JS", icon: viteIcon },
    { name: "NEXT JS", icon: nextIcon },
    { name: "REMIX", icon: remixIcon },
    { name: "STYLED COMPONENTS", icon: styledcomponentIcon },
    { name: "SEMANTIC UI", icon: semanticuiIcon },
    { name: "ANT DESIGN", icon: antdesignIcon },
    { name: "GATSBY", icon: gatsbyIcon },
    { name: "GIT", icon: gitIcon },
    { name: "VS CODE", icon: vscodeIcon },
  ];

  return (
    <motion.section
      className="py-12 bg-midnight"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center">
        {/* Heading with smooth transition */}
        <motion.div
          className="flex justify-center items-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white ms-auto">Skills</h2>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 ms-auto me-8 hover:text-blue-700 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showAll ? "View Less" : "View All"}
          </motion.button>
        </motion.div>

        {/* Marquee for scrolling effect */}
        {!showAll && (
          <motion.div
            className="px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Marquee speed={40} gradient={true} gradientColor="#2F2F46">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mx-6"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src={skill.icon} alt={`${skill.name} icon`} className="h-16" />
                </motion.div>
              ))}
            </Marquee>
          </motion.div>
        )}

        {/* Skills Grid (appears when showAll is true) */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8 px-20 justify-items-center content-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-between"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <img src={skill.icon} alt={`${skill.name} icon`} className="h-16" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;
