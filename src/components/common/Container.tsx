import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps, SVGMotionProps } from "motion/react";

// ============================================
// CONTAINER COMPONENT WITH MOTION SUPPORT
// ============================================

type ElementType = keyof React.JSX.IntrinsicElements;

// Get the appropriate motion props based on element type
type MotionPropsForElement<T extends ElementType> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLMotionProps<T>
    : T extends keyof SVGElementTagNameMap
    ? SVGMotionProps<React.SVGProps<SVGElement>>
    : never;

type ContainerOwnProps<T extends ElementType | string = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "full";
  centerContent?: boolean;
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

type PolymorphicContainerProps<T extends ElementType | string = "div"> =
  ContainerOwnProps<T> & Omit<ComponentProps<T>, keyof ContainerOwnProps<T>>;

type PolymorphicRef<T extends ElementType | string> = T extends ElementType
  ? React.ComponentPropsWithRef<T>["ref"]
  : React.Ref<Element>;

type ContainerComponent = <T extends ElementType | string = "div">(
  props: PolymorphicContainerProps<T> & {
    ref?: PolymorphicRef<T>;
  }
) => React.ReactElement | null;

// Define motion components outside of render
const MOTION_COMPONENTS: Record<string, React.ElementType> = {
  "motion.div": motion.div,
  "motion.section": motion.section,
  "motion.article": motion.article,
  "motion.header": motion.header,
  "motion.footer": motion.footer,
  "motion.main": motion.main,
  "motion.nav": motion.nav,
  "motion.aside": motion.aside,
};

const maxWidthMap = {
  sm: "max-w-screen-sm", // 640px
  md: "max-w-screen-md", // 768px
  lg: "max-w-screen-lg", // 1024px
  xl: "max-w-screen-xl", // 1280px
  "2xl": "max-w-screen-2xl", // 1536px
  "3xl": "max-w-[1920px]",
  "4xl": "max-w-[2560px]",
  "5xl": "max-w-[3840px]",
  "6xl": "max-w-[5120px]",
  "7xl": "max-w-[7680px]",
  full: "max-w-full",
};

const ContainerInner = (
  props: PolymorphicContainerProps<ElementType>,
  ref: PolymorphicRef<ElementType>
) => {
  const {
    as,
    children,
    className = "",
    maxWidth = "7xl",
    centerContent = false,
    ...restProps
  } = props;

  // Get the component directly from the mapping
  const Component = React.useMemo(() => {
    if (typeof as === "string" && as.startsWith("motion.")) {
      return MOTION_COMPONENTS[as] || motion.div;
    }
    return (as || "div") as React.ElementType;
  }, [as]);

  const maxWidthClass = maxWidthMap[maxWidth];
  const centerClass = centerContent ? "flex flex-col items-center" : "";
  const containerClasses =
    `mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${centerClass} ${className}`.trim();

  return (
    <Component
      ref={ref}
      className={containerClasses}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const Container = React.forwardRef(
  ContainerInner
) as unknown as ContainerComponent & {
  displayName: string;
};

Container.displayName = "Container";

export { Container };
export type { PolymorphicContainerProps, ContainerOwnProps };
