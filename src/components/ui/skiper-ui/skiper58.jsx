import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STAGGER = 0.028;

/**
 * TextRoll Component (Skiper UI skiper58)
 * Character-by-character kinetic staggered rolling text animation
 */
export const TextRoll = ({
  children,
  className,
  center = false,
  active = false,
  stagger = STAGGER,
  duration = 0.38,
  rollColorClass = "text-[#D4AF37]",
  initialColorClass = "text-white",
  onHoverStart,
  onHoverEnd,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }

  const activeState = active || isHovered;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      animate={activeState ? "hovered" : "initial"}
      onHoverStart={() => {
        setIsHovered(true);
        if (onHoverStart) onHoverStart();
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        if (onHoverEnd) onHoverEnd();
      }}
      className={cn("relative inline-block overflow-hidden select-none cursor-pointer leading-[0.88] transform-gpu will-change-transform", className)}
      style={{
        lineHeight: 0.88,
      }}
    >
      {/* Primary layer that rolls up */}
      <div className={cn("block", initialColorClass)}>
        {children.split("").map((char, i) => {
          const delay = center
            ? stagger * Math.abs(i - (children.length - 1) / 2)
            : stagger * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "0%",
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration,
                ease: [0.33, 1, 0.68, 1],
                delay,
              }}
              className="inline-block transform-gpu will-change-transform"
              key={i}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>

      {/* Replacement layer that rolls in from bottom */}
      <div className={cn("absolute inset-0 block", rollColorClass)}>
        {children.split("").map((char, i) => {
          const delay = center
            ? stagger * Math.abs(i - (children.length - 1) / 2)
            : stagger * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: "0%",
                },
              }}
              transition={{
                duration,
                ease: [0.33, 1, 0.68, 1],
                delay,
              }}
              className="inline-block transform-gpu will-change-transform"
              key={i}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};

/**
 * HeadlineTextRoll
 * Multi-line kinetic staggered text roll specifically engineered for prominent Hero headlines
 */
export const HeadlineTextRoll = ({
  lines = [
    "TRANSFORMING CORPORATE",
    "STRATEGY & TECHNOLOGY AT",
    "THE SPEED OF BUSINESS."
  ],
  className = "",
  lineClassName = "",
  rollColorClass = "text-[#D4AF37]",
  initialColorClass = "text-white",
  onHover,
  onHoverEnd,
}) => {
  return (
    <div
      className={cn("flex flex-col gap-1 sm:gap-2", className)}
      onMouseLeave={() => {
        if (onHoverEnd) onHoverEnd();
      }}
    >
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden flex items-center">
          <TextRoll
            center={false}
            stagger={0.022}
            duration={0.4}
            className={cn(
              "font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter uppercase leading-[0.9] block w-fit",
              lineClassName
            )}
            initialColorClass={initialColorClass}
            rollColorClass={rollColorClass}
            onHoverStart={() => onHover && onHover(line, idx)}
            onHoverEnd={() => onHoverEnd && onHoverEnd(line, idx)}
          >
            {line}
          </TextRoll>
        </div>
      ))}
    </div>
  );
};

const defaultNavigationItems = [
  {
    name: "Home",
    href: "/",
    description: "[0]",
  },
  {
    name: "Components",
    href: "/components",
    description: "[1]",
  },
  {
    name: "Pricing",
    href: "/pricing",
    description: "[2]",
  },
  {
    name: "How to use",
    href: "/docs/quick-start",
    description: "[3]",
  },
  {
    name: "Account",
    href: "/user",
    description: "[4]",
  },
  {
    name: "Login",
    href: "/login",
    description: "[7]",
  },
];

export const Skiper58 = ({
  items = defaultNavigationItems,
  onItemClick,
  onHover,
  onHoverEnd,
  className,
  activeItem,
  itemClassName,
}) => {
  return (
    <ul
      className={cn("bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm", className)}
      onMouseLeave={() => onHoverEnd && onHoverEnd()}
    >
      {items.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={item.href || index}
          onMouseEnter={() => onHover && onHover(item, index)}
          onMouseLeave={() => onHoverEnd && onHoverEnd(item, index)}
          onClick={() => onItemClick && onItemClick(item.href || item)}
        >
          <div className="relative flex items-start">
            <TextRoll
              center
              active={activeItem === item.href}
              onHoverStart={() => onHover && onHover(item, index)}
              onHoverEnd={() => onHoverEnd && onHoverEnd(item, index)}
              className={cn(
                "text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-5xl",
                itemClassName
              )}
            >
              {item.name}
            </TextRoll>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skiper58;

