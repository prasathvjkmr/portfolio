import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
// import Work from "./components/Work";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Socials from "./layout/Socials";

function App() {
  return (
    <>
      <Header />
      <Socials />
      <Hero />
      <Skills />
      <Experience />
      {/* <Work /> */}
      <Contact />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
