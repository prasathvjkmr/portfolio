import React from "react";

const Header = () => {
  const linkData = [
    {
      hrefLink: "#about",
      textContent: "About me",
    },
    {
      hrefLink: "#skills",
      textContent: "Skills",
    },
    {
      hrefLink: "#experience",
      textContent: "Experience",
    },
    {
      hrefLink: "#work",
      textContent: "Work",
    },
    {
      hrefLink: "#contact",
      textContent: "Contact",
    },
  ];
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 px-20">
        <h1 className="text-2xl font-bold">Prasath K</h1>
        <nav className="flex space-x-4 items-center gap-8">
          {linkData.map((navLink, index) => (
            <a
              key={index}
              href={navLink.hrefLink}
              className="hover:text-teal-400 font-display"
            >
              {navLink.textContent}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-teal-500 px-5 py-2 rounded hover:bg-transparent hover:outline hover:outline-offset-0 transition hover:outline-green hover:text-green flex gap-4 font-mono text-2xl font-bold"
          >
            Resume
            {/* <i className="bi bi-download"></i> */}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
