import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("bluekode"); // State to manage active tab

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white bg-green py-2 rounded-t-[20px] font-mono">
          2+ years of Work Experiences
        </h2>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex justify-evenly -mb-px text-sm font-medium text-center bg-midnight font-mono"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl font-semibold ${
                  activeTab === "bluekode"
                    ? "text-green border-green-500"
                    : "text-lime hover:text-green hover:border-green-300"
                }`}
                onClick={() => setActiveTab("bluekode")}
                role="tab"
                aria-selected={activeTab === "bluekode"}
              >
                Bluekode Solutions
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg text-2xl font-semibold ${
                  activeTab === "quadapp"
                    ? "text-green border-green-500"
                    : "text-lime hover:text-green hover:border-green-300"
                }`}
                onClick={() => setActiveTab("quadapp")}
                role="tab"
                aria-selected={activeTab === "quadapp"}
              >
                Quadapp Technologies Pvt Ltd.
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div>
          {/* Bluekode Solutions Tab */}
          <div
            className={`p-4 bg-[#F3F3F3] dark:bg-gray-800 rounded-b-[20px] ${
              activeTab === "bluekode" ? "block" : "hidden"
            }`}
            role="tabpanel"
            aria-labelledby="bluekode-tab"
          >
            <span className="block text-3xl mb-4 font-sans font-bold">
              UI Developer
            </span>
            <span className="block font-bold dark:text-gray-300">
              06/2023 - Present
            </span>
            <span className="block font-semibold dark:text-gray-300">
              Coimbatore, Tamil Nadu, India
            </span>
            <ul className="list-disc w-[98%] ms-auto my-4 font-display leading-8 dark:text-gray-300">
              <li>
                Redesigned website interfaces, increasing user engagement by 15%
                across various web platforms.
              </li>
              <li>
                Improved website functionality, reducing load time by 20%,
                enhancing user experience.
              </li>
              <li>
                Redesigned website elements to improve usability and visual
                appeal across Bluekode Solutions' web presence (including
                potential involvement with Bluekode Digital & Bluekode Academy).
              </li>
              <li>
                Created custom UI for Zoho Commerce stores, enabling a 10%
                increase in client store conversions.
              </li>
              <li>
                Contributed to the mobile app redesign using Figma, leading to a
                25% higher user retention rate for Headboxx.
              </li>
              <li>
                <span>Contact : </span>
                <span>Pradeepan (pradeepan@bluekodedigital.com)</span>
              </li>
            </ul>
          </div>

          {/* Quadapp Technologies Tab */}
          <div
            className={`p-4 bg-[#F3F3F3] dark:bg-gray-800 rounded-b-[20px] ${
              activeTab === "quadapp" ? "block" : "hidden"
            }`}
            role="tabpanel"
            aria-labelledby="quadapp-tab"
          >
            <span className="block text-3xl mb-4 font-sans font-bold">
              Software Engineer
            </span>
            <span className="block font-bold dark:text-gray-300">
              07/2022 - 12/2022
            </span>
            <span className="block font-semibold dark:text-gray-300">
              Trichy, Tamil Nadu, India
            </span>
            <ul className="list-disc w-[98%] ms-auto my-4 font-display leading-8 dark:text-gray-300">
              <li>
                Designed and executed customer resolution through ReactJs.
              </li>
              <li>
                Improved website functionality, reducing load time by 20%,
                enhancing user experience.
              </li>
              <li>
                Responsible for code development and responsive web design.
              </li>
              <li>
                Responsible for troubleshooting, debugging, and upgrading
                existing software.
              </li>
              <li>Integrated software components and third-party programs.</li>
              <li>
                <span>Contact : </span>
                <span>Reegan Lourdraj (reegan@quadapp.in)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
