import React from 'react';

const achievements = [
  { label: 'LeetCode Problems Solved', value: '200+' },
  { label: 'Production Apps Delivered', value: '3 Major' },
  { label: 'Tech Stack Breadth', value: 'Web + Mobile + AIML' },
  { label: 'Performance Focus', value: 'Optimized React & Node' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Highlights</h2>
      <div style={{ display:'grid', gap:'20px', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', marginTop:36 }}>
        {achievements.map(a => (
          <div key={a.label} style={{ padding:'18px 20px', border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.06)', backdropFilter:'blur(6px)', borderRadius:'16px', textAlign:'center' }} className="slide-in-left">
            <div style={{ fontSize:'1.6rem', fontWeight:700, marginBottom:6 }}>{a.value}</div>
            <div style={{ fontSize:12, letterSpacing:'0.5px', opacity:0.8 }}>{a.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}