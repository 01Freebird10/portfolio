import React, { useEffect } from 'react';

export default function Toast({ type = 'info', message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!duration) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  const bg = type === 'success'
    ? 'linear-gradient(90deg, #29c76f, #3ddc97)'
    : type === 'error'
      ? 'linear-gradient(90deg, #ff4d61, #ff6b81)'
      : 'linear-gradient(90deg, #4d9fff, #9b59ff)';

  return (
    <div role="status" aria-live="polite"
      style={{ position:'fixed', left:'50%', bottom:24, transform:'translateX(-50%)', zIndex:1000 }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px', color:'#fff', borderRadius:12, boxShadow:'0 10px 30px rgba(0,0,0,0.35)', background:bg, border:'1px solid rgba(255,255,255,0.25)' }}>
        <span aria-hidden>{type === 'success' ? '✔' : type === 'error' ? '✖' : 'ℹ'}</span>
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} aria-label="Dismiss notification" style={{ marginLeft:8, background:'rgba(255,255,255,0.18)', border:'none', color:'#fff', borderRadius:8, padding:'6px 8px', cursor:'pointer' }}>Dismiss</button>
        )}
      </div>
    </div>
  );
}
