import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps, SVGMotionProps } from "motion/react";

// ============================================
// BOX (POLYMORPHIC DIV) COMPONENT WITH REF
// ============================================

type ElementType = keyof React.JSX.IntrinsicElements;

// Get the appropriate motion props based on element type
type MotionPropsForElement<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLMotionProps<T>
    : T extends keyof SVGElementTagNameMap
    ? SVGMotionProps<React.SVGProps<SVGElement>>
    : never;

type BoxOwnProps<T extends ElementType | string = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
};

// Conditional type that returns motion props or regular props
type ComponentProps<T extends ElementType | string> =
  T extends `motion.${string}`
    ? T extends `motion.${infer E}`
      ? E extends ElementType
        ? MotionPropsForElement<E>
        : Record<string, unknown>
      : Record<string, unknown>
    : T extends ElementType
    ? React.ComponentPropsWithRef<T>
    : Record<string, unknown>;

type PolymorphicBoxProps<T extends ElementType | string = "div"> =
  BoxOwnProps<T> & Omit<ComponentProps<T>, keyof BoxOwnProps<T>>;

type PolymorphicRef<T extends ElementType | string> = T extends ElementType
  ? React.ComponentPropsWithRef<T>["ref"]
  : React.Ref<Element>;

type BoxComponent = <T extends ElementType | string = "div">(
  props: PolymorphicBoxProps<T> & {
    ref?: PolymorphicRef<T>;
  }
) => React.ReactElement | null;

// Define motion components outside of render - THIS IS THE FIX
const MOTION_COMPONENTS: Record<string, React.ElementType> = {
  "motion.div": motion.div,
  "motion.span": motion.span,
  "motion.p": motion.p,
  "motion.button": motion.button,
  "motion.a": motion.a,
  "motion.section": motion.section,
  "motion.article": motion.article,
  "motion.header": motion.header,
  "motion.footer": motion.footer,
  "motion.main": motion.main,
  "motion.nav": motion.nav,
  "motion.aside": motion.aside,
  "motion.h1": motion.h1,
  "motion.h2": motion.h2,
  "motion.h3": motion.h3,
  "motion.h4": motion.h4,
  "motion.h5": motion.h5,
  "motion.h6": motion.h6,
  "motion.ul": motion.ul,
  "motion.ol": motion.ol,
  "motion.li": motion.li,
  "motion.form": motion.form,
  "motion.input": motion.input,
  "motion.textarea": motion.textarea,
  "motion.label": motion.label,
  "motion.img": motion.img,
  "motion.svg": motion.svg,
  "motion.path": motion.path,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BoxInner = (props: any, ref: any) => {
  const { as, children, className, ...restProps } = props;

  // Get the component directly from the mapping
  const Component = React.useMemo(() => {
    if (typeof as === "string" && as.startsWith("motion.")) {
      return MOTION_COMPONENTS[as] || motion.div;
    }
    return (as || "div") as React.ElementType;
  }, [as]);

  return (
    <Component
      ref={ref}
      className={className}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const Box = React.forwardRef(BoxInner) as unknown as BoxComponent & {
  displayName: string;
};

Box.displayName = "Box";

export { Box };
export type { PolymorphicBoxProps, BoxOwnProps };
