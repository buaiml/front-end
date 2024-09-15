import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface SnapScrollProps {
  children: ReactNode[];
  scrollDuration?: number;
}

const SnapScroll: React.FC<SnapScrollProps> = ({
                                                 children,
                                                 scrollDuration = 500
                                               }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const childrenArray = React.Children.toArray(children);

  const scrollTo = (index: number) => {
    if (isScrollingRef.current) return;
    if (index < 0 || index >= childrenArray.length) return;

    isScrollingRef.current = true;
    setCurrentIndex(index);

    const container = containerRef.current;
    if (container) {
      const targetScrollTop = index * window.innerHeight;
      const startScrollTop = container.scrollTop;
      const difference = targetScrollTop - startScrollTop;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / scrollDuration, 1);
        const easeProgress = easeInOutCubic(progress);

        container.scrollTop = startScrollTop + difference * easeProgress;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          isScrollingRef.current = false;
        }
      };

      requestAnimationFrame(step);
    }
  };

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollTo(currentIndex + direction);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollTo(currentIndex + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollTo(currentIndex - 1);
          break;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, childrenArray.length]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden"
    >
      {React.Children.map(children, (child, index) => (child))}
    </div>
  );
};

export default SnapScroll;
