import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden noise">
      {/* Cursor glow follower */}
      <div
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full opacity-[0.025] blur-[80px] z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background: 'radial-gradient(circle, #8b5cf6 0%, #06b6d4 60%, transparent 100%)',
        }}
      />

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
  );
}
