import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// ============================================
// HEADING COMPONENT WITH VARIANTS & MOTION SUPPORT
// ============================================

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "default" | "display" | "title" | "subtitle" | "section";

interface HeadingOwnProps {
  as?: HeadingElement | `motion.${HeadingElement}`;
  level?: HeadingLevel;
  variant?: HeadingVariant;
  children: React.ReactNode;
  className?: string;
}

// Variant styles
const headingVariants: Record<HeadingVariant, string> = {
  default: "font-semibold text-foreground",
  display: "text-5xl md:text-6xl font-bold tracking-tight text-foreground",
  title: "text-3xl md:text-4xl font-bold text-foreground",
  subtitle: "text-xl md:text-2xl font-semibold text-muted-foreground",
  section: "text-2xl font-semibold text-foreground",
};

// Default sizes per level (jika variant = default)
const headingSizes: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl",
  2: "text-3xl md:text-4xl",
  3: "text-2xl md:text-3xl",
  4: "text-xl md:text-2xl",
  5: "text-lg md:text-xl",
  6: "text-base md:text-lg",
};

// Motion components mapping (h1-h6)
const MOTION_HEADING_COMPONENTS: Record<string, React.ElementType> = {
  "motion.h1": motion.h1,
  "motion.h2": motion.h2,
  "motion.h3": motion.h3,
  "motion.h4": motion.h4,
  "motion.h5": motion.h5,
  "motion.h6": motion.h6,
};

// Regular heading props
type RegularHeadingProps = HeadingOwnProps &
  Omit<React.ComponentPropsWithRef<"h1">, keyof HeadingOwnProps>;

// Motion heading props
type MotionHeadingProps = HeadingOwnProps &
  Omit<HTMLMotionProps<"h1">, keyof HeadingOwnProps>;

// Combined type
type HeadingProps = RegularHeadingProps | MotionHeadingProps;

const HeadingInner = (
  props: HeadingProps,
  ref: React.Ref<HTMLHeadingElement>
) => {
  const {
    as,
    level = 1,
    variant = "default",
    children,
    className,
    ...restProps
  } = props;

  // Determine component type
  const Component = React.useMemo(() => {
    if (typeof as === "string" && as.startsWith("motion.")) {
      return MOTION_HEADING_COMPONENTS[as] || motion.h1;
    }
    if (as) {
      return as as React.ElementType;
    }
    // Default based on level
    return `h${level}` as HeadingElement;
  }, [as, level]);

  // Jika variant adalah default, gunakan size sesuai level
  const variantClass =
    variant === "default"
      ? `${headingVariants.default} ${headingSizes[level]}`
      : headingVariants[variant];

  return (
    <Component
      ref={ref}
      className={cn(variantClass, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const Heading = React.forwardRef(
  HeadingInner
) as React.ForwardRefExoticComponent<
  HeadingProps & React.RefAttributes<HTMLHeadingElement>
>;

Heading.displayName = "Heading";

export { Heading };
export type { HeadingProps, HeadingLevel, HeadingVariant };
