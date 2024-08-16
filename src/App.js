import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
