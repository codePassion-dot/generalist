/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, type VariantProps } from "class-variance-authority";
import {
  ComponentProps,
  type Component,
  JSX,
  splitProps,
  mergeProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

const buttonWithin = cva(
  "absolute px-2 flex h-5/6 justify-between rounded-t-[14px] rounded-b-xl items-center uppercase inset-[1.5px]",
  {
    variants: {
      intent: {
        salmon: ["bg-salmon-pink", "text-white"],
        yellow: ["bg-pastel-yellow", "text-black"],
        white: ["bg-white", "text-black"],
      },
    },
    defaultVariants: {
      intent: "salmon",
    },
  },
);

type ElementType = "button" | Component<any>;

type ButtonProps<T extends ElementType> = Omit<ComponentProps<T>, "as"> &
  VariantProps<typeof buttonWithin> & { children: JSX.Element; as?: T };

const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const newProps = mergeProps({ children: null, class: undefined }, props);
  const [cvaProps, restButtonProps] = splitProps(newProps, ["intent", "class"]);
  const component = restButtonProps.as || "button";
  return (
    <Dynamic
      component={component}
      class="relative h-14 w-full rounded-b-xl rounded-t-2xl bg-black py-10 hover:bg-royal-purple focus:outline-none"
      {...restButtonProps}
    >
      <div
        class={buttonWithin({
          intent: cvaProps.intent,
          className: cvaProps.class,
        })}
      >
        {restButtonProps.children}
      </div>
    </Dynamic>
  );
};

export default Button;
