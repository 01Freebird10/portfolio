import React, { useEffect, useRef } from 'react';

// Comet cursor with retracting short trail (no long static tail)
export default function CometCursor({ enabled = true }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let pos = { x: w / 2, y: h / 2 };
    let trail = []; // keep recent points only
    let lastMoveTime = performance.now();

    function onMove(e) {
      pos = { x: e.clientX, y: e.clientY };
      lastMoveTime = performance.now();
      trail.push({ x: pos.x, y: pos.y });
      if (trail.length > 12) trail.shift(); // short trail
    }
    window.addEventListener('mousemove', onMove);

    function draw() {
      ctx.clearRect(0,0,w,h);
      if (enabled) {
        const now = performance.now();
        // If idle, retract trail quickly
        if (now - lastMoveTime > 120 && trail.length > 0) {
          trail.shift(); // remove oldest segment rapidly
        }
        // Draw short trail
        for (let i = 0; i < trail.length - 1; i++) {
          const a = trail[i]; const b = trail[i+1];
          const alpha = i / trail.length;
          ctx.strokeStyle = `rgba(77,159,255,${alpha * 0.8})`;
          ctx.lineWidth = 2 + alpha * 4;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        // Head glow smaller
        ctx.save();
        const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 14);
        glow.addColorStop(0, 'rgba(255,255,255,0.9)');
        glow.addColorStop(1, 'rgba(77,159,255,0)');
        ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(pos.x, pos.y, 14, 0, Math.PI*2); ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(draw);
    }
    let raf = requestAnimationFrame(draw);

    function onResize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); window.removeEventListener('mousemove', onMove); };
  }, [enabled]);

  return <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:30, pointerEvents:'none' }} />;
}
