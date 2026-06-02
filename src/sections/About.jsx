import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section fade-in" style={{ paddingBottom: '140px' }}>
      <h2 className="gradient-text" style={{ fontSize:'2.6rem', marginTop:0, marginBottom: '24px' }}>About Me</h2>
      <p style={{ maxWidth:860, fontSize: '1.15rem', lineHeight:1.8, marginBottom: '48px', opacity: 0.95 }}>
        I am an AIML Engineer & Full Stack Developer from Coimbatore, India. Passionate about end-to-end product builds: ideation, architecture, APIs, data modeling, UI/UX polish and performance. Comfortable across MERN, Next.js, mobile React Native, and Python backends. Focus areas include scalable design, clean abstractions, and continual problem solving with DSA.
      </p>
      
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'28px', marginTop:36 }}>
        <motion.div 
          whileHover={{ y: -6, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(77,159,255,0.2)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ padding:'28px 24px', borderRadius:'16px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', backdropFilter:'blur(4px)' }}
        >
          <div style={{ fontSize:'2.2rem', marginBottom:'16px' }}>💻</div>
          <h3 style={{ margin:'0 0 10px', fontSize:'1.25rem', color:'#4d9fff', fontWeight: '700' }}>Full-Stack Dev</h3>
          <p style={{ margin:0, fontSize:'14px', lineHeight:'1.6', opacity:0.8 }}>Building robust, scalable web and mobile SaaS apps with modern frameworks like React, Node.js, and React Native.</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -6, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(155,89,255,0.2)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ padding:'28px 24px', borderRadius:'16px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', backdropFilter:'blur(4px)' }}
        >
          <div style={{ fontSize:'2.2rem', marginBottom:'16px' }}>🤖</div>
          <h3 style={{ margin:'0 0 10px', fontSize:'1.25rem', color:'#9b59ff', fontWeight: '700' }}>AI / ML Integration</h3>
          <p style={{ margin:0, fontSize:'14px', lineHeight:'1.6', opacity:0.8 }}>Developing intelligent applications, data pipelines, and integrating cutting-edge large language models (LLMs).</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -6, background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(77,255,155,0.2)' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ padding:'28px 24px', borderRadius:'16px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', backdropFilter:'blur(4px)' }}
        >
          <div style={{ fontSize:'2.2rem', marginBottom:'16px' }}>🧠</div>
          <h3 style={{ margin:'0 0 10px', fontSize:'1.25rem', color:'#4dff9b', fontWeight: '700' }}>Problem Solving</h3>
          <p style={{ margin:0, fontSize:'14px', lineHeight:'1.6', opacity:0.8 }}>Algorithmic thinker with 350+ LeetCode problems solved, focusing on optimal data structures & performance.</p>
        </motion.div>
      </div>
    </section>
  );
}
