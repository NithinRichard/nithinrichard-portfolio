import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, type ComponentRef } from 'react';

const FONT = '14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
const COLUMN_WIDTH = 16;
const ROW_HEIGHT = 18;
const FPS = 18;

function BinaryRainOverlay() {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<ComponentRef<'canvas'>>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setupCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth || window.innerWidth;
      canvas.height = parent?.clientHeight || window.innerHeight;
    };

    setupCanvas();

    const columns = Math.floor(canvas.width / COLUMN_WIDTH) + 1;
    const drops = Array<number>(columns).fill(0);

    const timer = setInterval(() => {
      ctx.fillStyle = 'rgba(6, 9, 24, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = FONT;
      ctx.fillStyle = 'rgba(199, 208, 229, 0.45)';

      for (let index = 0; index < drops.length; index += 1) {
        const currentDrop = drops[index] ?? 0;
        const character = Math.random() > 0.5 ? '1' : '0';
        const x = index * COLUMN_WIDTH;
        const y = currentDrop * ROW_HEIGHT;

        ctx.fillText(character, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] = currentDrop + 1;
        }
      }
    }, 1000 / FPS);

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[12] h-full w-full opacity-85 mix-blend-screen"
    />
  );
}

export { BinaryRainOverlay };
