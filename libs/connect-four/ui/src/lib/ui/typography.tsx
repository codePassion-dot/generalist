/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, VariantProps } from "class-variance-authority";
import { JSX, type ComponentProps, splitProps, mergeProps } from "solid-js";
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

type ElementType = Exclude<CvaTypographyProps["intent"], null | undefined>;

type TypographyProps<T extends ElementType> = ComponentProps<T> &
  CvaTypographyProps & { children: JSX.Element };

const Typography = <T extends ElementType = "p">(props: TypographyProps<T>) => {
  const newProps = mergeProps(
    { intent: "p" as const, class: undefined },
    props,
  );
  const [cvaProps, restTypographyProps] = splitProps(newProps, [
    "class",
    "intent",
  ]);
  const component = newProps.intent || "p";

  return (
    <Dynamic
      component={component}
      class={typography({ intent: cvaProps.intent, className: cvaProps.class })}
      {...restTypographyProps}
    />
  );
};

export default Typography;
