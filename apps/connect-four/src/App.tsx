import { type Component } from 'solid-js';
import {
  Button,
  CircledButton,
  MenuButton,
  Typography,
} from '@generalist/connect-four/ui';

const App: Component = () => {
  return (
    <div>
      <header>
        <h1 class="font-medium">Hello world! Whereas recognition</h1>
        <Typography intent="p">Press me</Typography>
        <CircledButton />
        <Button intent="salmon"> play vs cpu </Button>
        <MenuButton />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid Now
        </a>
      </header>
    </div>
  );
};

export default App;
