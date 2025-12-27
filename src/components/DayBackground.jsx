import React, { useRef, useEffect } from 'react';

// Simple animated day scene: clean sky gradient and flying birds (no cars/buildings)
export default function DayBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const birds = Array.from({ length: 16 }, () => ({
      x: Math.random() * w,
      y: Math.random() * (h * 0.35) + 30,
      v: Math.random() * 0.8 + 0.6,
      s: Math.random() * 6 + 4,
    }));

    function drawSky() {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, '#b8e8ff');
      g.addColorStop(0.5, '#e9f8ff');
      g.addColorStop(1, '#fffdf5');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      // sun
      ctx.beginPath();
      ctx.arc(w - 120, 100, 40, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd94d';
      ctx.fill();
    }

    function drawBird(b) {
      // simple V-shaped bird
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x + b.s, b.y + b.s * 0.5);
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x - b.s, b.y + b.s * 0.5);
      ctx.stroke();
    }

    // No city/buildings for a clean view

    // No road/vehicles; keep focus on birds

    function tick() {
      drawSky();
      birds.forEach(b => { b.x += b.v; if (b.x > w + 20) b.x = -20; drawBird(b); });
      // clean scene only; birds animate over sky
      requestAnimationFrame(tick);
    }
    let raf = requestAnimationFrame(tick);

    function onResize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:-1 }} />;
}
