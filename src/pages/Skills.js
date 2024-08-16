import React from "react";

const skills = ['HTML', 'CSS', 'SASS', 'Bootstrap', 
  'Styled Components', 'CSS Modules', 
  'JavaScript', 'React JS', 'Figma', 
  'Canva', 'Git'];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
