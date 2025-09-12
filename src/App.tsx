// / Mengimpor semua komponen halaman
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
    // / "Wadah" utama aplikasi Anda.
    // / Warna latar belakang dan teks global diatur di sini menggunakan tema baru.
    <div className="bg-light-grey text-dark-slate antialiased">
      <Navbar />
      <main>
        {/* / Komponen Hero dibiarkan memenuhi seluruh layar */}
        <Hero />
        
        {/* / Konten lainnya diberi padding agar tidak menempel di tepi layar */}
        <div className="px-4 sm:px-6 lg:px-8">
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;

