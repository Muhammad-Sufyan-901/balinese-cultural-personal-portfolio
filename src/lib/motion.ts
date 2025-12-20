import type { Transition, Variant } from "motion/react";

// ============================================
// TYPES
// ============================================

export type Direction = "up" | "down" | "left" | "right";
export type TransitionType = "tween" | "spring";

// Variants type for Motion
export type Variants = {
  [key: string]: Variant;
};

// ============================================
// CONTAINER VARIANTS
// ============================================

export function staggeredContainer(
  staggerChildren: number,
  delayChildren: number = 0
): Variants {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
        duration: 0.3,
      },
    },
  };
}

export function textContainer(baseDelay: number = 0.1): Variants {
  return {
    hidden: {
      opacity: 0,
    },
    show: (index = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: baseDelay * index,
      },
    }),
  };
}

// ============================================
// FADE ANIMATIONS
// ============================================

export function fadeInTransition(
  direction: Direction,
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      } as Transition,
    },
  };
}

export function fadeOutTransition(
  direction: Direction,
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    show: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeIn",
      } as Transition,
    },
  };
}

// Simple fade without direction
export function fadeIn(delay: number = 0, duration: number = 0.5): Variants {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      } as Transition,
    },
  };
}

// ============================================
// SLIDE ANIMATIONS
// ============================================

export function slideInTransition(
  direction: Direction,
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
      y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      } as Transition,
    },
  };
}

export function slideOutTransition(
  direction: Direction,
  type: TransitionType = "tween",
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      x: 0,
      y: 0,
    },
    show: {
      x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeIn",
      } as Transition,
    },
  };
}

// ============================================
// ZOOM ANIMATIONS
// ============================================

export function zoomInTransition(
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        delay,
        duration,
      } as Transition,
    },
  };
}

export function zoomOutTransition(
  delay: number = 0,
  duration: number = 0.5
): Variants {
  return {
    hidden: {
      scale: 1,
      opacity: 1,
    },
    show: {
      scale: 0,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        delay,
        duration,
      } as Transition,
    },
  };
}

// ============================================
// TEXT ANIMATIONS
// ============================================

export function textVariantTransition(delay: number = 0): Variants {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      } as Transition,
    },
  };
}

// ============================================
// SCALE ANIMATIONS
// ============================================

export function scaleIn(delay: number = 0, duration: number = 0.5): Variants {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration,
      } as Transition,
    },
  };
}

// ============================================
// ROTATE ANIMATIONS
// ============================================

export function rotateIn(delay: number = 0, duration: number = 0.5): Variants {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration,
      } as Transition,
    },
  };
}

// ============================================
// BOUNCE ANIMATION
// ============================================

export function bounceIn(delay: number = 0): Variants {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        bounce: 0.5,
        duration: 0.8,
      } as Transition,
    },
  };
}

// ============================================
// FLIP ANIMATION
// ============================================

export function flipIn(delay: number = 0, duration: number = 0.6): Variants {
  return {
    hidden: {
      rotateY: 90,
      opacity: 0,
    },
    show: {
      rotateY: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      } as Transition,
    },
  };
}

// ============================================
// PRESET COMBINATIONS
// ============================================

// Untuk hero section
export function heroVariants(delay: number = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        delay,
        duration: 0.8,
        bounce: 0.3,
      } as Transition,
    },
  };
}

// Untuk card/item dalam list
export function cardVariants(index: number = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      } as Transition,
    },
  };
}

// Untuk navbar/header
export function navVariants(): Variants {
  return {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      } as Transition,
    },
  };
}
