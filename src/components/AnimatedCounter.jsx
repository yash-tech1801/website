import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component that smoothly animates numeric values
 * with easing when scrolled into viewport.
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Extract clean number
  const cleanStr = String(value || '').replace(/,/g, '');
  const numericMatch = cleanStr.match(/\d+(\.\d+)?/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isDecimal = String(value || '').includes('.');

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setDisplayValue(targetNumber);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setDisplayValue(targetNumber);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();
            const animate = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              
              // Smooth cubic ease-out curve
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = easeOut * targetNumber;

              setDisplayValue(isDecimal ? parseFloat(currentVal.toFixed(1)) : Math.floor(currentVal));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(targetNumber);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated, isDecimal]);

  // Format large integers with commas if >= 1000 and not decimal
  const formattedValue = !isDecimal && displayValue >= 1000 
    ? Math.floor(displayValue).toLocaleString() 
    : displayValue;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {hasAnimated ? formattedValue : (typeof value === 'string' && value ? value.replace(/[^\d.,]/g, '') : '0')}
      {suffix}
    </span>
  );
}
