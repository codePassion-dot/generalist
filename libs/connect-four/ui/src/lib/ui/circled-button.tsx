import type { Component, JSX } from "solid-js";

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
    class="group relative h-[64px] w-[64px] rounded-full bg-black hover:bg-royal-purple"
    {...props}
  >
    <div class="peer absolute inset-[2.5px] flex items-center justify-center rounded-full bg-salmon-pink stroke-[3] text-3xl uppercase text-white">
      <CheckIcon />
    </div>
    <div class="absolute inset-0 -z-10 h-[69px] rounded-full bg-black group-hover:bg-violet-blue peer-hover:bg-violet-blue"></div>
  </button>
);

export default CircledButton;
