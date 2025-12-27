import React from 'react';

export default function Certificates() {
  return (
    <section id="certificates" className="section fade-in">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Certificates</h2>
      <ul style={{ listStyle:'none', padding:0, marginTop:28, display:'flex', gap:'18px', flexWrap:'wrap' }}>
        <li style={itemStyle}>React JS Certificate</li>
      </ul>
    </section>
  );
}

const itemStyle = {
  background:'rgba(255,255,255,0.06)',
  padding:'16px 20px',
  borderRadius:'14px',
  border:'1px solid rgba(255,255,255,0.1)',
  backdropFilter:'blur(6px)',
  fontWeight:600,
};
