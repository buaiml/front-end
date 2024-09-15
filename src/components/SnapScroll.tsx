import React, { useState, useEffect, useRef, ReactNode, forwardRef, useImperativeHandle } from 'react';

interface SnapScrollProps {
  children: ReactNode[];
  scrollDuration?: number;
  snapThreshold?: number; // Percentage of screen height to trigger snap
}

interface SnapScrollRef {
  scrollTo: (index: number) => void;
}

const SnapScroll = forwardRef<SnapScrollRef, SnapScrollProps>(({
                                                                 children,
                                                                 scrollDuration = 500,
                                                                 snapThreshold = 0.1 // 10% of screen height
                                                               }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const childrenArray = React.Children.toArray(children);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  const scrollTo = (index: number, duration = scrollDuration) => {
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
        const progress = Math.min(elapsed / duration, 1);
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

  useImperativeHandle(ref, () => ({
    scrollTo
  }));

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScrollTop = container.scrollTop;
        const newIndex = Math.round(currentScrollTop / window.innerHeight);

        if (newIndex !== currentIndex) {
          scrollTo(newIndex, 300);  // Shorter duration for small adjustments
        }
      }, 50);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrollingRef.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollTo(currentIndex + direction);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY.current - touchY;
      const threshold = window.innerHeight * snapThreshold;

      if (Math.abs(diff) > threshold) {
        const direction = diff > 0 ? 1 : -1;
        scrollTo(currentIndex + direction);
        touchStartY.current = touchY; // Reset touch start to prevent multiple triggers
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      const timeDiff = Date.now() - touchStartTime.current;
      const velocity = Math.abs(diff / timeDiff);

      if (velocity > 0.5 || Math.abs(diff) > window.innerHeight * snapThreshold) {
        const direction = diff > 0 ? 1 : -1;
        scrollTo(currentIndex + direction);
      } else {
        scrollTo(currentIndex, 150);  // Snap back if not enough to change index
      }
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

    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, childrenArray.length, scrollDuration, snapThreshold]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll overflow-x-hidden"
    >
      {React.Children.map(children, (child) => (
        <div className="h-screen">{child}</div>
      ))}
    </div>
  );
});

SnapScroll.displayName = 'SnapScroll';

export default SnapScroll;
