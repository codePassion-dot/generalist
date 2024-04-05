import { cva, type VariantProps } from 'class-variance-authority';
import type { Component, JSX } from 'solid-js';

const buttonWithin = cva(
  'absolute px-2 flex h-5/6 justify-between rounded-t-[14px] rounded-b-xl items-center uppercase inset-[1.5px]',
  {
    variants: {
      intent: {
        salmon: ['bg-salmon-pink', 'text-white'],
        yellow: ['bg-pastel-yellow', 'text-black'],
        white: ['bg-white', 'text-black'],
      },
    },
    defaultVariants: {
      intent: 'salmon',
    },
  }
);

interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonWithin> {}

const Button: Component<ButtonProps> = ({ intent, children, ...props }) => (
  <button
    class="w-[300px] focus:outline-none hover:bg-royal-purple bg-black rounded-t-2xl rounded-b-xl h-14 relative"
    {...props}
  >
    <div class={buttonWithin({ intent })}>{children}</div>
  </button>
);

export default Button;
