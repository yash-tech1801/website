import React, { useEffect, useRef, useState } from 'react';

/**
 * TextReveal: Inspired by houseofyellow.nl line/word masked slide-up animations.
 * Splits text into masked rows with overflow-hidden and staggered translateY transitions.
 */
export default function TextReveal({
  children,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.08
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Split text by words or render directly if complex JSX
  const textContent = typeof children === 'string' ? children : '';

  if (!textContent) {
    return (
      <Component ref={containerRef} className={className}>
        <span className="block overflow-hidden">
          <span
            className={`block transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: `${delay}s` }}
          >
            {children}
          </span>
        </span>
      </Component>
    );
  }

  const words = textContent.split(' ');

  return (
    <Component ref={containerRef} className={`${className} flex flex-wrap gap-x-[0.25em] gap-y-1`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden py-0.5">
          <span
            className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'translate-y-0' : 'translate-y-[120%]'
            }`}
            style={{
              transitionDelay: `${delay + idx * stagger}s`
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
