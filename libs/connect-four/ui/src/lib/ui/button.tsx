/* eslint-disable @typescript-eslint/no-explicit-any */
import { cva, VariantProps } from 'class-variance-authority';
import type { JSX, ComponentProps, Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const typography = cva('typography', {
  variants: {
    intent: {
      h1: [
        'bg-blue-500',
        'text-red-500',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      h2: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      p: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      h3: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      h4: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
      a: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    intent: 'p',
    size: 'medium',
  },
});

type CvaButtonProps = VariantProps<typeof typography>;

export type ElementType =
  | Exclude<CvaButtonProps['intent'], null | undefined>
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
    Omit<CvaButtonProps, 'intent'> &
    DynamicProps<T>;

export const Typography = <T extends ElementType = 'p'>({
  intent,
  class: className,
  as,
  size,
  ...props
}: TypographyProps<T>) => {
  const component = as || 'p';

  return (
    <Dynamic
      component={component}
      class={typography({ intent, size, className })}
      {...props}
    />
  );
};
