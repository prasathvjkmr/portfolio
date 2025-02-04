import React from "react";
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
      <div className="container mx-auto text-center px-24">
        <div className="flex justify-between flex-wrap">
          {contactDetails.map((contact, index) => (
            <a
              className="flex items-center justify-center gap-4"
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={contact.icon} alt={contact.name} className="w-full" />
              <span className="text-white font-medium font-display text-xl">
                {contact.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
