/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, VariantProps } from "class-variance-authority";
import type { JSX, ComponentProps, Component } from "solid-js";
import { Dynamic } from "solid-js/web";

const typography = cva("typography", {
  variants: {
    intent: {
      h1: ["text-[56px]", "font-bold", "leading-[71px]"],
      h2: ["text-[24px]", "font-bold", "leading-[31px]"],
      h3: ["text-[20px]", "font-bold", "leading-[26px]"],
      h4: ["text-[16px]", "font-bold", "leading-[21px]"],
      p: ["text-[16px]", "font-medium", "leading-[21px]"],
    },
  },
  defaultVariants: {
    intent: "p",
  },
});

type CvaTypographyProps = VariantProps<typeof typography>;

type ElementType =
  | Exclude<CvaTypographyProps["intent"], null | undefined>
  | Component<any>;

type DynamicProps<T extends ElementType> = {
  children?: JSX.Element;
  intent?: Exclude<T, Component<any>>;
};

type HtmlTagPropsWithoutAsAndChildren<T extends ElementType> = Omit<
  ComponentProps<T>,
  keyof DynamicProps<T>
>;

type TypographyProps<T extends ElementType> =
  HtmlTagPropsWithoutAsAndChildren<T> &
    Omit<CvaTypographyProps, "intent"> &
    DynamicProps<T>;

const Typography = <T extends ElementType = "p">({
  intent,
  class: className,
  as,
  ...props
}: TypographyProps<T>) => {
  const component = as || "p";

  return (
    <Dynamic
      component={component}
      class={typography({ intent, className })}
      {...props}
    />
  );
};

export default Typography;
