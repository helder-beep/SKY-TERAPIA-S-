import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

export function CursorRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      // Add a new ripple
      ripples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ripples
      for (let i = 0; i < ripples.current.length; i++) {
        const ripple = ripples.current[i];
        
        // Update
        ripple.radius += 2; // Expansion speed
        ripple.opacity -= 0.02; // Fade speed

        // Draw
        if (ripple.opacity > 0) {
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(15, 145, 178, ${ripple.opacity})`; // Brand color #0F91B2
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Remove dead ripples
      ripples.current = ripples.current.filter((r) => r.opacity > 0);

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
