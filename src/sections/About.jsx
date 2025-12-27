import React from 'react';

export default function About() {
  return (
    <section id="about" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.4rem', marginTop:0 }}>About Me</h2>
      <p style={{ maxWidth:760, lineHeight:1.6 }}>
        I am an AIML Engineer & Full Stack Developer from Coimbatore, India. Passionate about end-to-end product builds: ideation, architecture, APIs, data modeling, UI/UX polish and performance. Comfortable across MERN, Next.js, mobile React Native, and Python backends. Focus areas include scalable design, clean abstractions, and continual problem solving with DSA.
      </p>
      <ul style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'14px', marginTop:32, padding:0, listStyle:'none' }}>
        {['HTML','CSS','JavaScript','React','Next.js','Node.js','Express','MongoDB','SQL','React Native','Python','AIML'].map(skill => (
          <li key={skill} style={{ background:'rgba(255,255,255,0.05)', padding:'14px 16px', borderRadius:'12px', backdropFilter:'blur(4px)', border:'1px solid rgba(255,255,255,0.08)' }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
