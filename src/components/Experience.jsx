import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // corrected import for motion

const Experience = () => {
  const [activeTab, setActiveTab] = useState("bluekode");

  const experiences = {
    bluekode: {
      title: "UI Developer",
      duration: "06/2023 - Present",
      location: "Coimbatore, Tamil Nadu, India",
      contact: { name: "Pradeepan", email: "pradeepan@bluekodedigital.com" },
      responsibilities: [
        "Redesigned website interfaces, increasing user engagement by 15% across various web platforms.",
        "Improved website functionality, reducing load time by 20%, enhancing user experience.",
        "Redesigned website elements to improve usability and visual appeal across Bluekode Solutions' web presence.",
        "Created custom UI for Zoho Commerce stores, enabling a 10% increase in client store conversions.",
        "Contributed to the mobile app redesign using Figma, leading to a 25% higher user retention rate for Headboxx.",
      ],
    },
    quadapp: {
      title: "Software Engineer",
      duration: "07/2022 - 12/2022",
      location: "Trichy, Tamil Nadu, India",
      contact: { name: "Reegan Lourdraj", email: "reegan@quadapp.in" },
      responsibilities: [
        "Designed and executed customer resolution through ReactJs.",
        "Improved website functionality, reducing load time by 20%, enhancing user experience.",
        "Responsible for code development and responsive web design.",
        "Responsible for troubleshooting, debugging, and upgrading existing software.",
        "Integrated software components and third-party programs.",
      ],
    },
  };

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white bg-green py-2 rounded-t-[20px] font-mono">
          2+ years of Work Experiences
        </h2>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap justify-evenly sm:justify-center -mb-px text-sm font-medium text-center bg-midnight font-mono"
            role="tablist"
          >
            {Object.keys(experiences).map((key) => (
              <li key={key} className="me-2 mb-2 sm:mb-0" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl font-semibold sm:text-lg ${
                    activeTab === key
                      ? "text-green border-green-500"
                      : "text-lime hover:text-green hover:border-green-300"
                  }`}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-controls={`${key}-content`}
                  aria-selected={activeTab === key}
                >
                  {key === "bluekode"
                    ? "Bluekode Solutions"
                    : "Quadapp Technologies Pvt Ltd."}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-[#F3F3F3] dark:bg-gray-800 rounded-b-[20px]"
              id={`${activeTab}-content`}
              role="tabpanel"
            >
              <span className="block text-3xl mb-4 font-sans font-bold">
                {experiences[activeTab].title}
              </span>
              <span className="block font-bold dark:text-gray-300">
                {experiences[activeTab].duration}
              </span>
              <span className="block font-semibold dark:text-gray-300">
                {experiences[activeTab].location}
              </span>
              <ul className="list-disc w-[98%] ms-auto my-4 font-display leading-8 dark:text-gray-300">
                {experiences[activeTab].responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                <li>
                  <span>Contact : </span>
                  <span>{experiences[activeTab].contact.name} </span>
                  (<a
                    href={`mailto:${experiences[activeTab].contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {experiences[activeTab].contact.email}
                  </a>)
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
