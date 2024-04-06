import type { Component, JSX } from 'solid-js';

const Logo: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={58}
      height={61}
      viewBox="0 0 58 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#000">
        <circle cx={13} cy={13} r={13} />
        <circle cx={45} cy={13} r={13} />
        <circle cx={13} cy={45} r={13} />
        <circle cx={45} cy={45} r={13} />
      </g>
      <g fill="#000">
        <circle cx={13} cy={16} r={13} />
        <circle cx={45} cy={16} r={13} />
        <circle cx={13} cy={48} r={13} />
        <circle cx={45} cy={48} r={13} />
      </g>
      <circle cx={13} cy={13} r={10} fill="#FD6687" />
      <circle cx={45} cy={45} r={10} fill="#FD6687" />
      <circle cx={45} cy={13} r={10} fill="#FFCE67" />
      <circle cx={13} cy={45} r={10} fill="#FFCE67" />
    </svg>
  );
};

export default Logo;
