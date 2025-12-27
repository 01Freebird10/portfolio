import React, { useRef, useEffect } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // handle HiDPI with a gentle cap to avoid perf spikes
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = (canvas.width = Math.floor(window.innerWidth * DPR));
    let h = (canvas.height = Math.floor(window.innerHeight * DPR));
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(DPR, DPR);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      d: Math.random() * 0.4 + 0.1,
    }));

    const comets = Array.from({ length: 3 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 0.5,
      vx: -(Math.random() * 2 + 1.2),
      vy: Math.random() * 0.3 - 0.15,
      len: Math.random() * 140 + 80,
    }));

    // precompute backdrop gradient, update on resize
    let bgGradient = null;
    function computeGradient() {
      const g = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      g.addColorStop(0, 'rgba(20,0,40,0.2)');
      g.addColorStop(1, 'rgba(0,0,0,0.4)');
      bgGradient = g;
    }
    computeGradient();

    let animId = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      // gradient backdrop subtle overlay (reused)
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      // stars
      ctx.fillStyle = 'rgba(150,170,255,0.9)';
      stars.forEach((s) => {
        s.x += s.d * 0.15;
        if (s.x > window.innerWidth) s.x = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // comets
      comets.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;
        if (c.x < -c.len) {
          c.x = window.innerWidth + 50;
          c.y = Math.random() * window.innerHeight * 0.5;
        }
        const grad = ctx.createLinearGradient(c.x, c.y, c.x + c.len, c.y);
        grad.addColorStop(0, 'rgba(255,255,255,0.9)');
        grad.addColorStop(1, 'rgba(80,120,255,0)');
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x + c.len, c.y);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    }

    let raf = (animId = requestAnimationFrame(draw));
    function onResize() {
      // reset transform then resize and rescale
      ctx.setTransform(1,0,0,1,0,0);
      const DPR2 = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.width = Math.floor(window.innerWidth * DPR2);
      h = canvas.height = Math.floor(window.innerHeight * DPR2);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(DPR2, DPR2);
      computeGradient();
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId || raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: -1 }} />;
}


