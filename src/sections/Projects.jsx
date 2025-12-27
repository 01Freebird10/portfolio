import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title:'Eatzz',
    stack:'React Native',
    description:'Food ordering & delivery app, user-centric ordering flow, state management and dynamic menus.',
    link:'#'
  },
  {
    title:'Lendify',
    stack:'MERN Stack',
    description:'Peer-to-peer lending & borrowing platform with secure transactions and repayment tracking.',
    link:'#'
  },
  {
    title:'Payroll System',
    stack:'Python',
    description:'Company-based employee & office maintenance system with automated payroll logic.',
    link:'#'
  },
  {
    title:'Mini Projects',
    stack:'React',
    description:'Weather app (real-time API), typing speed test, currency converter utilities.',
    link:'#'
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const visibleCount = 3; // show 3 cards at a time (responsive fallback below)

  function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }
  function next() { setIndex(i => clamp(i + 1, 0, projects.length - visibleCount)); }
  function prev() { setIndex(i => clamp(i - 1, 0, projects.length - visibleCount)); }

  // Adjust visible count for narrow screens
  const [cols, setCols] = useState(visibleCount);
  useEffect(() => {
    function onResize() {
      const w = window.innerWidth;
      if (w < 620) setCols(1); else if (w < 900) setCols(2); else setCols(3);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  useEffect(() => { // ensure index not out of range when cols change
    setIndex(i => clamp(i, 0, projects.length - cols));
  }, [cols]);

  function onKeyDown(e){
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  }

  const wheelLock = useRef(0);
  function onWheel(e){
    e.preventDefault();
    const now = Date.now();
    if (now - wheelLock.current < 220) return;
    wheelLock.current = now;
    if ((e.deltaX || e.deltaY) > 0) next(); else prev();
  }

  return (
    <section id="projects" className="section fade-in" aria-label="Projects section">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0, display:'flex', alignItems:'center', gap:'16px' }}>
        Projects
        <span aria-live="polite" style={{ fontSize:'0.9rem', fontWeight:500, opacity:0.6 }}>({index + 1}-{Math.min(index + cols, projects.length)} / {projects.length})</span>
      </h2>
      <div role="region" aria-roledescription="carousel" aria-label="Projects carousel"
           tabIndex={0} onKeyDown={onKeyDown} onWheel={onWheel}
           style={{ position:'relative', marginTop:34, outline:'none' }}>
        <button onClick={prev} disabled={index === 0} aria-label="Show previous projects"
          style={navBtnStyleLeft(index === 0, cols)}>&larr;</button>
        <button onClick={next} disabled={index >= projects.length - cols} aria-label="Show next projects"
          style={navBtnStyleRight(index >= projects.length - cols, cols)}>&rarr;</button>
        <div ref={sliderRef} style={{ overflow:'hidden', width:'100%' }}>
          <motion.div
            animate={{ x: `-${index * (100 / cols)}%` }}
            transition={{ type:'spring', stiffness:110, damping:18 }}
            style={{ display:'grid', gridTemplateColumns:`repeat(${projects.length}, 1fr)`, gap:'26px', width:`${(projects.length / cols) * 100}%` }}>
            {projects.map((p,i) => (
              <article key={p.title}
                style={{ position:'relative', padding:'20px 22px 80px', borderRadius:'18px', background:'rgba(255,255,255,0.05)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.1)', overflow:'hidden' }}>
                <h3 style={{ margin:'0 0 6px' }}>{p.title}</h3>
                <small style={{ opacity:0.7 }}>{p.stack}</small>
                <p style={{ fontSize:14, lineHeight:1.5 }}>{p.description}</p>
                <a href={p.link} style={{ position:'absolute', left:22, bottom:18, fontWeight:600 }}>Details ↗</a>
                <div style={{ position:'absolute', right:-40, top:-40, width:140, height:140, background:'linear-gradient(135deg,#4d9fff,#9b59ff)', opacity:0.2, transform:'rotate(25deg)' }} />
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function navBtnBase(disabled) {
  return {
    position:'absolute', top:'50%', transform:'translateY(-50%)', width:'44px', height:'44px', borderRadius:'12px', border:'1px solid rgba(255,255,255,0.18)', background: disabled ? 'rgba(255,255,255,0.08)' : 'linear-gradient(135deg,#4d9fff,#9b59ff)', color:'#fff', fontSize:'1.2rem', fontWeight:600, cursor: disabled ? 'not-allowed':'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 16px -6px rgba(0,0,0,0.45)', transition:'opacity .3s', opacity: disabled ? 0.4 : 1
  };
}
function navBtnStyleLeft(disabled, cols){ return { ...navBtnBase(disabled), left: cols < 3 ? '6px' : '-56px' }; }
function navBtnStyleRight(disabled, cols){ return { ...navBtnBase(disabled), right: cols < 3 ? '6px' : '-56px' }; }
