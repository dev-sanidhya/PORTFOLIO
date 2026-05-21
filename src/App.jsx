import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundField from './components/BackgroundField';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-800 text-paper overflow-x-hidden grain">
      <BackgroundField />
      <Cursor />

      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
