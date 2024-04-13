/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, VariantProps } from "class-variance-authority";
import { JSX, type ComponentProps } from "solid-js";
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

const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const component = props.intent || "p";

  return (
    <Dynamic
      component={component}
      class={typography({ intent: props.intent, className: props.class })}
      {...props}
    />
  );
};

export default Typography;
