import React from "react";
import linkedInIcon from "../assets/images/icons/footer/linkedin.svg";
import locationIcon from "../assets/images/icons/footer/location.svg";
import mailIcon from "../assets/images/icons/footer/mail.svg";
import facebookIcon from "../assets/images/icons/socials/facebook.svg";
import instagramIcon from "../assets/images/icons/socials/instagram.svg";
import linkedInSocialsIcon from "../assets/images/icons/socials/linkedin.svg";
import xIcon from "../assets/images/icons/socials/x.svg";

const Footer = () => {
  const navLinks = [
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Work", url: "#work" },
    { name: "Project", url: "#projects" },
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
      <span className="block text-center text-6xl">Prasath K</span>
      <ul className="flex justify-center gap-10 items-center py-8 text-xl">
        {navLinks.map((nav, index) => (
          <li key={index}>
            <a href={nav.url} target="_blank" rel="noopener noreferrer">
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-around flex-wrap gap-8 px-24 py-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <img src={skill.icon} alt={skill.name} className="" />
            <p className="text-white font-medium text-xl font-display">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <hr className="max-w-5xl text-center mx-auto my-8" />
      <div className="container mx-auto text-center">
        <p>© 2025 Prasath K. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
