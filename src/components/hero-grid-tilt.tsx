import futureGridImage from '@/assets/images/future-grid.webp';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect } from 'react';

const springConfig = {
  damping: 22,
  mass: 0.7,
  stiffness: 170,
};

function HeroGridTilt() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-9, 9]), springConfig);
  const backgroundX = useSpring(useTransform(mouseX, [-1, 1], [3, -3]), springConfig);
  const backgroundY = useSpring(useTransform(mouseY, [-1, 1], [3, -3]), springConfig);

  useEffect(() => {
    const updateMouseScreenPosition = ({ clientX, clientY }: MouseEvent) => {
      const screenMiddleX = window.innerWidth / 2;
      const screenMiddleY = window.innerHeight / 2;

      const screenMouseX = (clientX - screenMiddleX) / screenMiddleX;
      const screenMouseY = (clientY - screenMiddleY) / screenMiddleY;

      mouseX.set(screenMouseX);
      mouseY.set(screenMouseY);
    };

    window.addEventListener('mousemove', updateMouseScreenPosition);

    return () => {
      window.removeEventListener('mousemove', updateMouseScreenPosition);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 [perspective:1400px]"
    >
      <motion.img
        src={futureGridImage.src}
        alt=""
        loading="eager"
        decoding="sync"
        className="h-full w-full object-cover object-center opacity-100 [filter:contrast(1.2)_saturate(1.12)_brightness(1.08)]"
        style={{
          transform: useMotionTemplate`translate3d(${backgroundX}px, ${backgroundY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
        }}
      />
    </div>
  );
}

export { HeroGridTilt };
