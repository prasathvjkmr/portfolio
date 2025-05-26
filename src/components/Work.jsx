import React from "react";
import { motion } from "motion/react";
import { FaGlobe } from "react-icons/fa";

const works = [
  {
    title: "B2C",
    url: "https://buygirlush.com",
    label: "buygirlush.com",
    description:
      "Integrated Zoho Ecom, Shiprocket, and Razorpay. Delivered custom styling and incorporated client feedback, resulting in an output that exceeded expectations.",
    review: `We are thrilled with the new website launch. The process was smooth and efficient, and the team was always responsive to our feedback. The deployment was seamless and the support continues to be excellent. Looking forward to more collaborations in the future!`,
    iconColor: "text-white",
    bg: "bg-gradient-to-br from-green via-lime to-midnight",
    glow: "shadow-[0_0_60px_10px_rgba(59,186,156,0.5)]",
    best: false,
  },
  {
    title: "B2B",
    url: null,
    label: "Healboxx",
    description:
      "Managed a team to design the mobile app, delivering a complete user flow from start to finish.",
    review: `A big thank you to the entire team for their dedication and hard work. The app design exceeded our expectations and the user flow is intuitive. Special appreciation to @Prasath for guiding us through every step and ensuring a successful delivery. Great job, everyone!`,
    iconColor: "text-gray-500",
    bg: "bg-gradient-to-br from-gray via-midnight to-black",
    glow: "shadow-[0_0_60px_10px_rgba(47,47,70,0.5)]",
    best: false,
  },
  {
    title: "B2C & B2B",
    url: "https://kaigal.com",
    label: "kaigal.com",
    description:
      "Implemented custom design with i18n translation support and enabled participation in Startup Singam on Vijay TV.",
    review: `Thanks from my side too. Please see the new website with 4 languages. We will increase to more languages in the coming days. Thank you everyone. Special thanks to @Prasath for assisting us throughout. You made our website task deployment much simpler!! Kudos to all your efforts guys!
I would like to thank all the folks who were involved in getting this new website.

Today, on the auspicious day of Holi, our new website is made online.

Thanks again for all your efforts.`,
    iconColor: "text-white",
    bg: "bg-gradient-to-br from-green via-lime to-midnight",
    glow: "shadow-[0_0_80px_20px_rgba(59,186,156,0.6)]",
    best: true,
  },
];

export default function Work() {
  return (
    <section
      className="relative py-28 bg-gradient-to-b from-midnight via-gray to-midnight overflow-hidden"
      id="work"
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[40rem] h-[40rem] rounded-full bg-green opacity-20 blur-3xl z-0"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] rounded-full bg-lime opacity-15 blur-3xl z-0"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        className="relative z-10 text-5xl md:text-7xl font-extrabold text-center mb-24 bg-clip-text bg-gradient-to-r from-green via-lime to-midnight drop-shadow-2xl tracking-tight font-display"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="underline decoration-green decoration-8 underline-offset-8">
          Featured Work
        </span>
      </motion.h2>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {works.map((work, idx) => (
          <motion.div
            key={work.title}
            className={`group flex flex-col h-full rounded-3xl overflow-hidden shadow-xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_120px_30px_rgba(59,186,156,0.7)] backdrop-blur-xl bg-opacity-80 ${work.bg} ${work.glow} ${
              work.best
                ? "ring-4 ring-green ring-offset-4 ring-offset-midnight scale-105"
                : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="flex justify-center items-center h-28 bg-black/40 backdrop-blur-md">
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${work.iconColor} text-5xl hover:text-green transition-colors`}
                  aria-label={`Visit ${work.label}`}
                >
                  <FaGlobe />
                </a>
              ) : (
                <span className={`${work.iconColor} text-5xl`}>
                  <FaGlobe />
                </span>
              )}
            </div>
            <span
              className={`block text-center bg-black/60 text-white py-4 font-bold font-mono text-xl tracking-wider uppercase font-mono ${
                work.best
                  ? "bg-gradient-to-r from-green via-lime to-green text-midnight shadow-lg"
                  : ""
              }`}
            >
              {work.title}
              {work.best && (
                <span className="ml-2 px-3 py-1 rounded-full bg-green text-midnight text-xs font-extrabold align-middle shadow font-sans border border-lime">
                  Best
                </span>
              )}
            </span>
            <motion.p
              className="p-8 text-center text-white text-lg font-medium min-h-[120px] font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
            >
              <strong className="text-midnight bg-green px-2 py-1 rounded">{work.label}</strong>
              <span className="block mt-3 text-base text-white">{work.description}</span>
            </motion.p>
            <div className="px-8 pb-8 mt-auto">
              <div className="bg-black/50 rounded-xl p-5 mt-2 text-white text-sm font-sans italic border border-lime/30 shadow-inner">
                <span className="block mb-2 font-bold text-green text-base">
                  Client Review
                </span>
                <span style={{ whiteSpace: "pre-line" }}>{work.review}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
