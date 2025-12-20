import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// ============================================
// TEXT COMPONENT WITH VARIANTS & MOTION SUPPORT
// ============================================

type TextVariant = "default" | "lead" | "large" | "small" | "muted";
type ElementType = "p" | "span" | "div";

interface TextOwnProps {
  as?: ElementType | `motion.${ElementType}`;
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}

// Variant styles
const textVariants: Record<TextVariant, string> = {
  default: "text-base leading-relaxed text-foreground",
  lead: "text-xl leading-relaxed text-muted-foreground",
  large: "text-lg leading-relaxed text-foreground",
  small: "text-sm leading-relaxed text-muted-foreground",
  muted: "text-sm leading-relaxed text-muted-foreground",
};

// Motion components mapping (only p, span, div)
const MOTION_TEXT_COMPONENTS: Record<string, React.ElementType> = {
  "motion.p": motion.p,
  "motion.span": motion.span,
  "motion.div": motion.div,
};

// Regular text props
type RegularTextProps = TextOwnProps &
  Omit<React.ComponentPropsWithRef<"p">, keyof TextOwnProps>;

// Motion text props
type MotionTextProps = TextOwnProps &
  Omit<HTMLMotionProps<"p">, keyof TextOwnProps>;

// Combined type
type TextProps = RegularTextProps | MotionTextProps;

const TextInner = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as, variant = "default", children, className, ...restProps } = props;

  // Determine component type
  const Component = React.useMemo(() => {
    if (typeof as === "string" && as.startsWith("motion.")) {
      return MOTION_TEXT_COMPONENTS[as] || motion.p;
    }
    return (as || "p") as React.ElementType;
  }, [as]);

  return (
    <Component
      ref={ref}
      className={cn(textVariants[variant], className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const Text = React.forwardRef(TextInner) as React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<HTMLElement>
>;

Text.displayName = "Text";

export { Text };
export type { TextProps, TextVariant };
