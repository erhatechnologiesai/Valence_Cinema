'use client';

import { useEffect, useRef } from 'react';

interface AntiGravityCanvasProps {
  particleCount?: number;
  interactive?: boolean;
}

export default function AntiGravityCanvas({
  particleCount = 50,
  interactive = true,
}: AntiGravityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Color palette: Warm cinematic ember, amber gold, and subtle silver dust
    const colors = [
      'rgba(255, 94, 58, ',  // Poppy/Apex Coral
      'rgba(245, 158, 11, ', // Golden Amber
      'rgba(255, 215, 0, ',  // 24K Gold
      'rgba(255, 255, 255, ',// Diamond Dust
    ];

    const count = window.innerWidth < 768 ? Math.min(25, particleCount) : particleCount;

    // Particles array
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1.0,
      baseAlpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.6 + 0.2), // gentle upward anti-gravity drift
      oscillationSpeed: Math.random() * 0.02 + 0.005,
      oscillationAmp: Math.random() * 25 + 10,
      seed: Math.random() * 100,
    }));

    // Mouse coordinates with spring damping
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 120 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Anti-gravity harmonic drift
        p.y += p.vy;
        p.x += Math.sin(t * p.oscillationSpeed + p.seed) * 0.4 + p.vx;

        // Wrap around vertically
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Mouse repulsion physics (anti-gravity repulsion field)
        if (interactive && mouse.x > 0 && mouse.y > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 3;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Draw glowing ember particle
        const pulse = Math.sin(t * 2 + p.seed) * 0.2 + 0.8;
        const currentAlpha = p.baseAlpha * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = '#ff5e3a';
        ctx.shadowBlur = p.size * 3;
        ctx.fill();
        ctx.shadowBlur = 0; // reset to avoid state churn
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [particleCount, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full will-change-transform"
      style={{ transform: 'translateZ(0)' }}
      aria-hidden="true"
    />
  );
}
