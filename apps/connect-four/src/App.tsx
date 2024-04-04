import { type Component } from 'solid-js';
import { Button, Typography } from '@generalist/connect-four/ui';

const App: Component = () => {
  return (
    <div>
      <header>
        <h1 class="font-medium">Hello world! Whereas recognition</h1>
        <Typography intent="p">Press me</Typography>
        <Button intent="primary">
          <div class="flex w-full justify-center h-full items-center">
            play vs cpu
          </div>
        </Button>
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
