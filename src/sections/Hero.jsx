import React, { useEffect, useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { motion } from 'framer-motion';

const rotating = [
  'I build Web Apps',
  'I love DSA problem solving in Python',
  'I build mobile apps'
];

export default function Hero({ mode = 'dark' }) {
  const { text } = useTypewriter(rotating);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t); }, []);

  return (
    <header className="section" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns:'1.2fr 0.8fr', alignItems:'center', gap:'24px', position:'relative' }}>
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1 }}>
        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)', margin: '0 0 20px' }}>Hi, I’m Iniyan S K</h1>
        <h2 style={{ fontSize: 'clamp(1.2rem,3vw,2rem)', fontWeight: 500, margin: '0 0 32px' }}>{text}<span style={{ opacity:0.6 }}>{'|'}</span></h2>
        <p style={{ maxWidth: 620, lineHeight: 1.5 }}>
          AIML Engineer & Full Stack Developer (B.Tech AIML). I craft performant web & mobile experiences, explore data structures & algorithms, and deliver scalable backend systems.
        </p>
        <div style={{ marginTop: 30, display:'flex', gap: '16px', flexWrap:'wrap' }}>
          <button data-scroll="#projects" style={buttonStyle} aria-label="Jump to projects">Explore Projects</button>
          <a href="https://github.com/01Freebird10" target="_blank" rel="noreferrer" style={buttonOutline} aria-label="Open GitHub profile in new tab">GitHub ↗</a>
          <a href="https://leetcode.com/u/Iniyan_072/" target="_blank" rel="noreferrer" style={buttonOutline} aria-label="Open LeetCode profile in new tab">LeetCode ↗</a>
          <a href="https://www.linkedin.com/in/iniyan-sk" target="_blank" rel="noreferrer" style={buttonOutline} aria-label="Open LinkedIn profile">LinkedIn ↗</a>
          <a href="/resume.pdf" download style={buttonStyle} aria-label="Download Resume PDF">Download Resume</a>
        </div>
      </motion.div>
      {loaded && (mode === 'dark' ? <EngineerIllustration /> : <TopicCards />)}
    </header>
  );
}

function EngineerIllustration() {
  // CS Engineer avatar laptop coding vibe
  return (
    <motion.div initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1.0 }}
      style={{ justifySelf:'end', width:'280px', height:'280px', pointerEvents:'none', position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'radial-gradient(circle, rgba(77,159,255,0.45) 0%, rgba(155,89,255,0.32) 62%, rgba(0,0,0,0) 74%)', boxShadow:'0 0 34px rgba(77,159,255,0.75)' }} />
      <motion.span
        animate={{ y:[0,-6,0] }} transition={{ repeat:Infinity, duration:4 }}
        style={{ fontSize:'82px', lineHeight:1 }} aria-label="Computer Science Engineer"
      >🧑‍💻</motion.span>
    </motion.div>
  );
}

function TopicCards() {
  // Light mode: show topic cards instead of avatar
  const topics = [
    { t:'Web Apps', d:'Full-stack builds with performance focus.' },
    { t:'Mobile', d:'Cross-platform React Native solutions.' },
    { t:'AIML', d:'Model integration & intelligent features.' },
    { t:'DSA', d:'Problem solving in Python & Java.' },
    { t:'Cloud', d:'Deploy & optimize services.' },
    { t:'UI/UX', d:'Accessible, animated interfaces.' },
  ];
  return (
    <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8 }}
      style={{ justifySelf:'end', width:'100%', maxWidth:'480px', display:'grid', gap:'14px', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))' }}>
      {topics.map((c,i) => (
        <motion.div key={c.t} whileHover={{ y:-4 }} style={{ padding:'12px 14px', borderRadius:'14px', background:'rgba(255,255,255,0.65)', boxShadow:'0 4px 10px rgba(0,0,0,0.08)', border:'1px solid rgba(0,0,0,0.06)', display:'flex', flexDirection:'column', gap:4 }}>
          <strong style={{ fontSize:13 }}>{c.t}</strong>
          <span style={{ fontSize:11, lineHeight:1.3, opacity:0.75 }}>{c.d}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

const buttonStyle = {
  background:'linear-gradient(90deg,#4d9fff,#9b59ff)',
  padding:'14px 22px',
  borderRadius:'30px',
  fontWeight:700,
  color:'#fff',
  textShadow:'0 1px 2px rgba(0,0,0,0.6)',
  boxShadow:'0 0 14px rgba(77,159,255,0.7)',
};

const buttonOutline = {
  padding:'14px 22px',
  borderRadius:'30px',
  fontWeight:700,
  border:'2px solid #4d9fff',
  color:'#fff',
  background:'rgba(0,0,0,0.25)',
};
