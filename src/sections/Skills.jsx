import React, { useEffect, useState } from 'react';

const skillData = [
  { name:'React', level:92 },
  { name:'Next.js', level:85 },
  { name:'Node.js', level:88 },
  { name:'Python', level:90 },
  { name:'MongoDB', level:80 },
  { name:'SQL', level:78 },
  { name:'Express', level:84 },
  { name:'React Native', level:75 },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <section id="skills" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Skills</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'28px', marginTop:36 }}>
        {skillData.map(s => (
          <div key={s.name} style={{ padding:'18px 20px', borderRadius:'14px', background:'rgba(255,255,255,0.06)', backdropFilter:'blur(6px)', border:'1px solid rgba(255,255,255,0.08)' }} className="slide-in-left">
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:10 }}>
              <strong>{s.name}</strong><span>{s.level}%</span>
            </div>
            <div className={`skill-bar`}>
              <div className="skill-bar-fill" style={{ width: mounted ? s.level + '%' : 0, transition:'width 1.8s cubic-bezier(0.65,0,0.35,1)' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
