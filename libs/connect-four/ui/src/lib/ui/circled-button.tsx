import type { Component, JSX } from 'solid-js';

type CircledButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

function CheckIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 11.582l10.264 10.264L32.11 2" stroke="#fff" />
    </svg>
  );
}

const CircledButton: Component<CircledButtonProps> = ({ ...props }) => (
  <button
    class="rounded-full w-[64px] h-[64px] hover:bg-royal-purple group relative bg-black"
    {...props}
  >
    <div class="absolute stroke-[3] text-3xl bg-salmon-pink text-white flex rounded-full inset-[2.5px] peer justify-center items-center uppercase">
      <CheckIcon />
    </div>
    <div class="rounded-full group-hover:bg-royal-purple inset-0 absolute bg-black h-[69px] -z-10 peer-hover:bg-royal-purple"></div>
  </button>
);

export default CircledButton;
