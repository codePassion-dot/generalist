import { JSX, Component } from 'solid-js';

const PlayerVsPlayerIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width={82}
      height={46}
      viewBox="0 0 82 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={59} cy={23} r={23} fill="#000" />
      <circle cx={59} cy={23} r={20} fill="#FFCE67" />
      <g fill="#000">
        <path d="M74.583 21.208c0 6.352-5.148 11.5-11.5 11.5-6.351 0-11.5-5.148-11.5-11.5h3a8.5 8.5 0 0017 0h3zM62.375 14.667v4.987h-3v-4.987h3zM70.708 14.667v4.987h-3v-4.987h3z" />
      </g>
      <circle cx={23} cy={23} r={23} fill="#000" />
      <circle cx={23} cy={23} r={20} fill="#FFCE67" />
      <g fill="#000">
        <path d="M38.583 21.208c0 6.352-5.148 11.5-11.5 11.5-6.351 0-11.5-5.148-11.5-11.5h3a8.5 8.5 0 0017 0h3zM26.375 14.667v4.987h-3v-4.987h3zM34.708 14.667v4.987h-3v-4.987h3z" />
      </g>
    </svg>
  );
};

export default PlayerVsPlayerIcon;
