import React, { useState } from "react";
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
    // Add more skills if needed
  ];

  return (
    <section className="py-12 bg-midnight" id="skills">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-2xl font-bold text-white ms-auto">Skills</h2>
          <button
            onClick={() => setShowAll(!showAll)} // Toggle the state
            className="text-blue-500 ms-auto me-8 hover:text-blue-700 focus:outline-none"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>

        {/* Marquee for scrolling effect, only visible when not showing all skills */}
        {!showAll && (
          <div className="px-20">
            <Marquee speed={40} gradient={true} gradientColor="#2F2F46">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center mx-6">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className=""
                  />
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {/* Skills Grid (appears when showAll is true) */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8 transition-all duration-500 ease-in-out overflow-hidden px-20 justify-items-center content-center ${
            showAll ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
          }`}
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-between">
              <img src={skill.icon} alt={`${skill.name} icon`} className="h-16" />
              {/* <span className="mt-2 text-white">{skill.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
