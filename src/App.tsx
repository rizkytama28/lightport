import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
<div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Contact />
</div>
  );
}

export default App;
