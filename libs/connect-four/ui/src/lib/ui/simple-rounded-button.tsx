import { JSX, ParentComponent } from "solid-js";

const SimpleRoundedButton: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button
      {...props}
      class="w-full rounded-full bg-royal-purple px-4 py-1 uppercase text-white hover:bg-salmon-pink"
    >
      {props.children}
    </button>
  );
};

export default SimpleRoundedButton;
