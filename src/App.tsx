// / Mengimpor semua komponen halaman Anda, termasuk yang baru
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechCarousel from "./components/TechCarousel"; // / Impor komponen baru
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-[#f1f5f9] text-[#334155] antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="px-4 sm:px-6 lg:px-8">
            <About />
            <Projects />
            <Skills />
            <TechCarousel /> {/* / Tambahkan carousel di sini */}
            <Contact />
        </div>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;