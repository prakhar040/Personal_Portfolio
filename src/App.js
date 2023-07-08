import Nav from "./components/Nav";
import Home from "./components/Home";
import SocMediaLinks from "./components/SocMediaLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Certificates />
      <SocMediaLinks />
    </div>
  );
}

export default App;
