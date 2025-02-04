import React from "react";
// import Avatar from "../assets/images/profile.svg";
import Avatar from "../assets/images/avatar.jpg";

const Hero = () => {
  return (
    <section className="text-center py-16" id="home">
      <h2 className="text-4xl text-gray text-4xl">Hi, I am</h2>
      <h1 className="text-6xl font-bold text-green font-mono font-bold">
        Prasath
      </h1>
      <img
        src={Avatar}
        alt="Prasath Avatar"
        className="mx-auto w-[40dvh] h-[40dvh] rounded-full my-6"
      />
      <h3 className="text-4xl text-midnight">React Specialist</h3>
      <h3 className="text-6xl text-green font-mono font-bold">
        Frontend Developer
      </h3>
      <p className="mt-4 text-black-600 font-display font-medium text-3xl max-w-7xl mx-auto">
        Hi there! 👋 I’m Prasath, Front-End Developer. I turn Tea ☕ and code 🖥️
        into pixel-perfect, web magic. Let's create something fabulous together!
        🚀
      </p>
      <p className="mt-4 text-black-600 font-display text-3xl max-w-5xl mx-auto">
        Got a design or a bug? Let’s create something fun and fabulous together!
        🚀
      </p>
    </section>
  );
};

export default Hero;
