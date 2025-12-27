import React from 'react';

const timeline = [
  { year: '2025', title: 'AIML Engineer / Full Stack Projects', details: 'Built mobile (React Native) and MERN apps: Eatzz food delivery, Lendify P2P lending, payroll automation.' },
  { year: '2024', title: 'Advanced DSA Practice', details: 'LeetCode daily problem solving sharpening algorithms & data structures.' },
  { year: '2023', title: 'B.Tech AIML Studies', details: 'Foundations in Machine Learning, Python systems, backend integration.' }
];

export default function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Experience</h2>
      <div style={{ marginTop:36, position:'relative' }}>
        <div style={{ position:'absolute', left:12, top:0, bottom:0, width:3, background:'linear-gradient(180deg,#4d9fff,#9b59ff)' }} />
        <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'28px' }}>
          {timeline.map(item => (
            <li key={item.year} style={{ paddingLeft:40, position:'relative' }}>
              <span style={{ position:'absolute', left:0, top:8, width:20, height:20, borderRadius:'50%', background:'linear-gradient(90deg,#4d9fff,#9b59ff)', boxShadow:'0 0 8px #4d9fff' }} />
              <h3 style={{ margin:'0 0 6px', fontSize:'1.1rem' }}>{item.year} – {item.title}</h3>
              <p style={{ margin:0, opacity:0.85, fontSize:14, lineHeight:1.5 }}>{item.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}