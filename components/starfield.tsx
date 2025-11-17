'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Star {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  maxSize: number;
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
  velocity: number; // Movement speed
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars with uniform distribution
    const initStars = () => {
      const stars: Star[] = [];
      const numStars = 75;
      const isDark = resolvedTheme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // Create grid-based distribution for uniformity
      const cols = Math.ceil(Math.sqrt(numStars * (canvas.width / canvas.height)));
      const rows = Math.ceil(numStars / cols);
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (stars.length >= numStars) break;
          
          // Add randomness within each cell for natural look
          const x = j * cellWidth + Math.random() * cellWidth;
          const y = i * cellHeight + Math.random() * cellHeight;
          
          const baseSize = 0.35 * Math.random();
          const maxSize = baseSize * (2 + Math.random() * 2);
          const baseOpacity = 0.3 + Math.random() * 0.3;
          
          // Random color tint
          const colorChoice = Math.random();
          let color: string;
          
          if (isDark) {
            if (colorChoice < 0.7) {
              color = 'rgba(255, 255, 255, 1)';
            } else if (colorChoice < 0.85) {
              color = 'rgba(200, 180, 255, 1)'; // Purple tint
            } else {
              color = 'rgba(180, 220, 255, 1)'; // Blue tint
            }
          } else {
            // Light theme: subtle pastel colors with better contrast
            if (colorChoice < 0.7) {
              color = 'rgba(70, 80, 120, 1)'; // Soft blue-gray
            } else if (colorChoice < 0.85) {
              color = 'rgba(100, 70, 120, 1)'; // Soft purple
            } else {
              color = 'rgba(80, 100, 130, 1)'; // Soft steel blue
            }
          }
          
          stars.push({
            x,
            y,
            size: baseSize,
            baseSize,
            maxSize,
            opacity: baseOpacity,
            baseOpacity,
            pulseSpeed: 0.0005 + Math.random() * 0.001, // Slow pulse
            pulsePhase: Math.random() * Math.PI * 2,
            color,
            velocity: 0.1 + Math.random() * 0.03, // Random movement speed
          });
        }
      }
      
      starsRef.current = stars;
    };

    // Animation loop
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach((star) => {
        // Move star diagonally (bottom-left to top-right)
        star.x += star.velocity;
        star.y -= star.velocity;
        
        // Wrap around when star goes off screen
        if (star.x > canvas.width + 50) {
          star.x = -50;
        }
        if (star.x < -50) {
          star.x = canvas.width + 50;
        }
        if (star.y < -50) {
          star.y = canvas.height + 50;
        }
        if (star.y > canvas.height + 50) {
          star.y = -50;
        }
        
        // Calculate pulsing effect
        const pulseProgress = Math.sin(timestamp * star.pulseSpeed + star.pulsePhase);
        const normalizedPulse = (pulseProgress + 1) / 2; // Convert from [-1, 1] to [0, 1]
        
        // Smooth easing for more natural pulse
        const easedPulse = normalizedPulse < 0.5
          ? 2 * normalizedPulse * normalizedPulse
          : 1 - Math.pow(-2 * normalizedPulse + 2, 2) / 2;
        
        star.size = star.baseSize + (star.maxSize - star.baseSize) * easedPulse;
        star.opacity = star.baseOpacity + (1 - star.baseOpacity) * easedPulse;
        
        // Draw star with glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
        
        const color = star.color.replace('1)', `${star.opacity})`);
        const glowColor = star.color.replace('1)', `${star.opacity * 0.3})`);
        
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.4, color);
        gradient.addColorStop(1, glowColor);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Core bright center
        ctx.fillStyle = star.color.replace('1)', `${star.opacity * 1.2})`);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -8 }}
    />
  );
}
