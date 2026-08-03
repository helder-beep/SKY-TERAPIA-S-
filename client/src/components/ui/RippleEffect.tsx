import { useEffect, useRef } from 'react';

export function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Array<{x: number, y: number, r: number, alpha: number, speed: number}>>([]);
  const lastMousePos = useRef<{x: number, y: number} | null>(null);
  const throttleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw ripples
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const r = ripples.current[i];
        r.r += r.speed; // Expansion speed
        r.alpha -= 0.015; // Fade speed

        if (r.alpha <= 0) {
          ripples.current.splice(i, 1);
          continue;
        }

        // Outer ring (Light)
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        // Changed to cyan for visibility on white background
        ctx.strokeStyle = `rgba(15, 145, 178, ${r.alpha * 0.4})`; 
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Inner ring (Subtle shadow/depth)
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r * 0.85, 0, Math.PI * 2);
        // Darker cyan/slate for contrast
        ctx.strokeStyle = `rgba(6, 59, 77, ${r.alpha * 0.2})`; 
        ctx.lineWidth = 4;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle creation to avoid too many ripples
      if (now - throttleRef.current < 20) return;
      throttleRef.current = now;

      // Calculate distance from last ripple to ensure we only spawn when moving
      if (lastMousePos.current) {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 10) return;
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY };

      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        r: 5,
        alpha: 1.0,
        speed: 2 + Math.random() // Slight variation in expansion speed
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[5]" 
      style={{ mixBlendMode: 'soft-light' }} 
    />
  );
}
