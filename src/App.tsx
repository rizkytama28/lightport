import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    // 👇 Div ini adalah "wadah" utama aplikasi Anda.
    // Class background dan warna teks dikontrol dari sini,
    // sehingga akan merespons dengan benar saat mode gelap/terang aktif.
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;
