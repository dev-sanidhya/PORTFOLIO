import { useEffect, useRef } from 'react';

/**
 * Abstract canvas flow-field background.
 * Slow drifting particle trails that respond to mouse + scroll.
 * Deliberately subtle: lives behind everything, never dominates.
 */
export default function BackgroundField() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    particles: [],
    mouse: { x: -9999, y: -9999, vx: 0, vy: 0, lastX: 0, lastY: 0 },
    scrollY: 0,
    raf: 0,
    width: 0,
    height: 0,
    dpr: 1,
    t: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const s = stateRef.current;

    s.dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      s.width = window.innerWidth;
      s.height = window.innerHeight;
      canvas.width = s.width * s.dpr;
      canvas.height = s.height * s.dpr;
      canvas.style.width = `${s.width}px`;
      canvas.style.height = `${s.height}px`;
      ctx.scale(s.dpr, s.dpr);

      const isMobile = s.width < 768;
      const target = isMobile ? 38 : 90;
      s.particles = [];
      for (let i = 0; i < target; i++) {
        s.particles.push(spawn(s.width, s.height));
      }
    };

    const spawn = (w, h) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      life: Math.random() * 600 + 200,
      maxLife: 800,
      size: Math.random() * 0.8 + 0.4,
      hue: Math.random() < 0.18 ? 'ember' : 'paper',
      seed: Math.random() * 1000,
    });

    // Flow field via cheap pseudo-noise
    const fieldAngle = (x, y, t) => {
      const nx = x * 0.0014;
      const ny = y * 0.0014;
      // Layered sinusoidal pseudo-noise gives organic curls
      return (
        Math.sin(nx + t) * 1.4 +
        Math.cos(ny * 1.3 - t * 0.7) * 1.2 +
        Math.sin((nx + ny) * 0.8 + t * 0.4) * 0.9
      );
    };

    const onMove = (e) => {
      s.mouse.lastX = s.mouse.x;
      s.mouse.lastY = s.mouse.y;
      s.mouse.x = e.clientX;
      s.mouse.y = e.clientY;
      s.mouse.vx = s.mouse.x - s.mouse.lastX;
      s.mouse.vy = s.mouse.y - s.mouse.lastY;
    };

    const onScroll = () => {
      s.scrollY = window.scrollY;
    };

    let running = true;
    const onVisibility = () => {
      running = !document.hidden;
      if (running) tick();
    };

    const tick = () => {
      if (!running) return;
      s.t += 0.0035;
      // Trail effect via low-alpha clear
      ctx.fillStyle = 'rgba(10, 10, 11, 0.06)';
      ctx.fillRect(0, 0, s.width, s.height);

      for (let i = 0; i < s.particles.length; i++) {
        const p = s.particles[i];
        const a = fieldAngle(p.x, p.y + s.scrollY * 0.18, s.t);
        p.vx += Math.cos(a) * 0.06;
        p.vy += Math.sin(a) * 0.06;

        // Mouse attraction (subtle)
        const dx = s.mouse.x - p.x;
        const dy = s.mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 30000 && d2 > 1) {
          const f = 18 / d2;
          p.vx += dx * f;
          p.vy += dy * f;
        }

        // Friction
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        const fade = Math.min(1, p.life / 120) * Math.min(1, (p.maxLife - p.life) / 80);
        const alpha = 0.22 * fade;

        if (p.hue === 'ember') {
          ctx.fillStyle = `rgba(255, 91, 31, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(235, 230, 220, ${alpha * 0.65})`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Respawn off-screen or dead
        if (
          p.life <= 0 ||
          p.x < -30 || p.x > s.width + 30 ||
          p.y < -30 || p.y > s.height + 30
        ) {
          s.particles[i] = spawn(s.width, s.height);
        }
      }

      s.raf = requestAnimationFrame(tick);
    };

    resize();
    tick();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
