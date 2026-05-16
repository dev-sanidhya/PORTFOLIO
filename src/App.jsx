import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import BuyMeCoffee from './components/BuyMeCoffee';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

// Lazy-load WebGL scene so the rest of the page never blocks on it
const WebGLScene = lazy(() => import('./components/webgl/WebGLScene'));

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-800 text-paper overflow-x-hidden grain">
      <Suspense fallback={null}>
        <WebGLScene />
      </Suspense>
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

        <BuyMeCoffee />
        <Footer />
      </div>
    </div>
  );
}
