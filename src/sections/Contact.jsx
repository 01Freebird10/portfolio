import React, { useEffect, useState } from 'react';
import Toast from '../components/Toast.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section fade-in" aria-label="Contact section">
      <h2 className="gradient-text" style={{ fontSize:'2.2rem', marginTop:0 }}>Contact</h2>
      <p style={{ maxWidth:640 }}>Reach out for collaboration, opportunities, or tech discussions. Use the form or direct links below.</p>
      <div style={{ marginTop:24, display:'grid', gap:'18px', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))' }}>
        <ContactCard label="Email" value="skiniyan44@gmail.com" href="mailto:skiniyan44@gmail.com" />
        <ContactCard label="Phone" value="8825722724" href="tel:+918825722724" />
        <ContactCard label="GitHub" value="01Freebird10" href="https://github.com/01Freebird10" />
        <ContactCard label="LeetCode" value="Iniyan_072" href="https://leetcode.com/u/Iniyan_072/" />
        <ContactCard label="LinkedIn" value="linkedin.com/in/iniyan-sk" href="https://www.linkedin.com/in/iniyan-sk" />
        <ContactCard label="Location" value="Coimbatore, India" />
      </div>
      <ContactForm />
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const showToast = status === 'success' || status === 'error';
  const toastMsg = status === 'success' ? 'Message sent successfully.' : status === 'error' ? 'Failed to send message. Please try again.' : '';
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setStatus('idle'), 3000);
    return () => clearTimeout(t);
  }, [showToast]);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const data = new FormData(form);
      const res = await fetch('/', { method: 'POST', body: data });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else throw new Error('Network response not ok');
    } catch (err) {
      setStatus('error');
    }
  }
  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} style={{ marginTop:50, maxWidth:640, marginLeft:'auto', marginRight:'auto', display:'flex', flexDirection:'column', gap:'16px', background:'rgba(255,255,255,0.05)', padding:'30px 32px', borderRadius:'20px', border:'1px solid rgba(255,255,255,0.1)', backdropFilter:'blur(8px)' }}>
      <input type="hidden" name="form-name" value="contact" />
      <p style={{ margin:0, fontWeight:600, fontSize:'1.1rem', display:'flex', alignItems:'center', gap:'10px' }}>Send a Message {status === 'sending' && <span style={{ fontSize:12, opacity:0.7 }}>Sending...</span>} {status === 'success' && <span style={{ fontSize:12, color:'#4dff9b' }}>Sent ✔</span>} {status === 'error' && <span style={{ fontSize:12, color:'#ff4d61' }}>Error ✖</span>}</p>
      <p style={{ display:'none' }}>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>
      <label style={labelStyle}>Name
        <input name="name" required placeholder="Your name" style={inputStyle} className="form-input" />
      </label>
      <label style={labelStyle}>Email
        <input type="email" name="email" required placeholder="you@example.com" style={inputStyle} className="form-input" />
      </label>
      <label style={labelStyle}>Message
        <textarea name="message" required rows={5} placeholder="Tell me about your idea..." style={{ ...inputStyle, resize:'vertical' }} className="form-input" />
      </label>
      <div style={{ display:'flex', gap:'14px', flexWrap:'wrap', marginTop:8 }}>
        <button type="submit" className="btn-primary" style={submitStyle} aria-label="Send message via form" disabled={status==='sending'}>{status==='sending' ? 'Sending...' : 'Send Message'}</button>
        <a href="mailto:skiniyan44@gmail.com" className="btn-outline" style={altLinkStyle} aria-label="Open mail client">Open Mail App ↗</a>
        <a href="tel:+918825722724" className="btn-outline" style={altLinkStyle} aria-label="Call phone number">Call Now ↗</a>
      </div>
      <small style={{ opacity:0.6 }}>Form powered by Netlify – spam protected with honeypot.</small>
      {showToast && (
        <Toast
          type={status === 'success' ? 'success' : 'error'}
          message={toastMsg}
          onClose={() => setStatus('idle')}
        />
      )}
    </form>
  );
}

const labelStyle = { display:'flex', flexDirection:'column', gap:6, fontSize:14, fontWeight:500 };
const inputStyle = { padding:'12px 14px', borderRadius:'10px', border:'1px solid rgba(255,255,255,0.25)', background:'rgba(0,0,0,0.25)', color:'#fff', fontSize:14, outline:'none' };
const submitStyle = { background:'linear-gradient(90deg,#4d9fff,#9b59ff)', padding:'14px 22px', borderRadius:'30px', fontWeight:700, color:'#fff', border:'none', cursor:'pointer', boxShadow:'0 0 14px rgba(77,159,255,0.6)' };
const altLinkStyle = { padding:'12px 20px', borderRadius:'24px', fontWeight:600, border:'2px solid #4d9fff', color:'#fff', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6 };

function ContactCard({ label, value, href }) {
  const body = (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      <span style={{ fontSize:12, opacity:0.7 }}>{label}</span>
      <strong>{value}</strong>
    </div>
  );
  return (
    <div style={{ background:'rgba(255,255,255,0.05)', padding:'18px 20px', borderRadius:'14px', border:'1px solid rgba(255,255,255,0.09)', backdropFilter:'blur(5px)' }}>
      {href ? <a href={href} style={{ color:'inherit', textDecoration:'none' }}>{body}</a> : body}
    </div>
  );
}
