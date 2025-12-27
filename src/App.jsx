import React, { useEffect, useState, useRef } from 'react';
import SpaceBackground from './components/SpaceBackground.jsx';
import DayBackground from './components/DayBackground.jsx';
import CometCursor from './components/CometCursor.jsx';
import ThemeToggle from './theme/ThemeToggle.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Certificates from './sections/Certificates.jsx';
import Contact from './sections/Contact.jsx';
import Experience from './sections/Experience.jsx';
import Achievements from './sections/Achievements.jsx';

export default function App() {
  const [mode, setMode] = useState('dark');
  useEffect(() => {
    document.body.classList.toggle('light', mode === 'light');
    document.body.classList.toggle('cursor-none', mode === 'light');
  }, [mode]);

  // augment anchor clicks to smooth scroll (ensure cross-browser)
  useEffect(() => {
    function handleClick(e) {
      const target = e.target.closest('[data-scroll]');
      if (!target) return;
      const sel = target.getAttribute('data-scroll');
      const el = document.querySelector(sel);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // simple parallax on scroll
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      document.documentElement.style.setProperty('--parallax-offset', (y * 0.3) + 'px');
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() { setNavOpen(o => !o); }
  function closeNav() { setNavOpen(false); }
  const [active, setActive] = useState('top');
  const prevY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const [scrollDir, setScrollDir] = useState('down');

  // Intersection Observer to set active section
  useEffect(() => {
    const ids = ['top','about','skills','projects','experience','achievements','certificates','contact'];
    const options = { root:null, rootMargin:'0px 0px -55% 0px', threshold:0.15 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, options);
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // Track scroll direction for nav animation
  useEffect(() => {
    function onScrollDir() {
      const y = window.scrollY;
      setScrollDir(y > prevY.current ? 'down' : 'up');
      prevY.current = y;
    }
    window.addEventListener('scroll', onScrollDir, { passive:true });
    return () => window.removeEventListener('scroll', onScrollDir);
  }, []);

  return (
    <>
      <a href="#main" className="skip-to-content">Skip to content</a>
      {mode === 'dark' ? <SpaceBackground /> : <DayBackground />}
      <CometCursor enabled={true} />
      <nav className="nav-bar" role="navigation" aria-label="Primary" style={{ position:'fixed', top:14, left:0, right:0, padding:'0 24px', zIndex:20 }}>
        <button onClick={() => { window.scrollTo({ top:0, behavior:'smooth' }); }} aria-label="Scroll to top" style={{ background:'none', border:'none', color:'inherit', fontWeight:700, fontSize:'1.05rem', cursor:'pointer' }}>Iniyan<span style={{ color:'#4d9fff' }}>SK</span></button>
        <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
          <button className="mobile-toggle" aria-expanded={navOpen} aria-controls="site-menu" onClick={toggleNav} style={{ background:'linear-gradient(90deg,#4d9fff,#9b59ff)', border:'none', padding:'10px 14px', borderRadius:'10px', color:'#fff', fontWeight:600, cursor:'pointer' }}>{navOpen ? 'Close ✕' : 'Menu ☰'}</button>
          <div id="site-menu" className={"nav-links" + (navOpen ? ' open' : '')}>
            <a href="#top" data-scroll="#top" onClick={closeNav} aria-label="Home section" aria-current={active==='top' ? 'page' : undefined} className={(active==='top'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Home</a>
            <a href="#about" data-scroll="#about" onClick={closeNav} aria-label="About section" aria-current={active==='about' ? 'page' : undefined} className={(active==='about'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>About</a>
            <a href="#skills" data-scroll="#skills" onClick={closeNav} aria-label="Skills section" aria-current={active==='skills' ? 'page' : undefined} className={(active==='skills'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Skills</a>
            <a href="#projects" data-scroll="#projects" onClick={closeNav} aria-label="Projects section" aria-current={active==='projects' ? 'page' : undefined} className={(active==='projects'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Projects</a>
            <a href="#experience" data-scroll="#experience" onClick={closeNav} aria-label="Experience section" aria-current={active==='experience' ? 'page' : undefined} className={(active==='experience'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Experience</a>
            <a href="#achievements" data-scroll="#achievements" onClick={closeNav} aria-label="Achievements section" aria-current={active==='achievements' ? 'page' : undefined} className={(active==='achievements'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Highlights</a>
            <a href="#certificates" data-scroll="#certificates" onClick={closeNav} aria-label="Certificates section" aria-current={active==='certificates' ? 'page' : undefined} className={(active==='certificates'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Certificates</a>
            <a href="#contact" data-scroll="#contact" onClick={closeNav} aria-label="Contact section" aria-current={active==='contact' ? 'page' : undefined} className={(active==='contact'?'active ':'') + (scrollDir==='down'?'slide-dir-down':'slide-dir-up')}>Contact</a>
            <ThemeToggle mode={mode} onToggle={() => setMode(m => m === 'dark' ? 'light' : 'dark')} />
          </div>
        </div>
      </nav>
      <main id="main" role="main" tabIndex="-1">
        <div id="top" />
        <Hero mode={mode} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Contact />
        <footer role="contentinfo">© {new Date().getFullYear()} Iniyan S K. All rights reserved.</footer>
      </main>
    </>
  );
}
