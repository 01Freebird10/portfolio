import React from 'react';
import { motion } from 'framer-motion';

const skillData = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  { name: 'Python' },
  { name: 'MongoDB' },
  { name: 'SQL' },
  { name: 'Express' },
  { name: 'React Native' },
];

export default function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Skills</h2>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'16px', marginTop:36 }}>
        {skillData.map(s => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(77,159,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding:'12px 24px',
              borderRadius:'30px',
              background:'rgba(255,255,255,0.06)',
              backdropFilter:'blur(6px)',
              border:'1px solid rgba(255,255,255,0.08)',
              fontWeight:'600',
              color:'#fff',
              cursor: 'default',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'border-color 0.2s, background-color 0.2s'
            }}
            className="slide-in-left"
          >
            {s.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
