import "./App.scss";
import Navbar from "./layout/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
