import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Cybersecurity from './components/Cybersecurity';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Journey />
        <Certifications />
        <Projects />
        <Cybersecurity />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
