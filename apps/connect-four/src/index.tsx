/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";

import Pages from "./pages";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  Pages,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  root!,
);
