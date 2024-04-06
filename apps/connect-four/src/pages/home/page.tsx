import { Component } from 'solid-js';
import {
  Button,
  Logo,
  PlayerVsPlayerIcon,
  Typography,
} from '@generalist/connect-four/ui';

const HomePage: Component = () => {
  return (
    <main class="h-screen gap-20 overflow-y-hidden bg-royal-purple flex flex-col items-center justify-center">
      <header>
        <Logo />
      </header>
      <section class="flex self-stretch mx-4 flex-col gap-3 items-center">
        <Button intent="yellow">
          <div class="flex items-center w-full px-2 justify-between">
            <Typography intent="h2">Play vs Player</Typography>
            <PlayerVsPlayerIcon />
          </div>
        </Button>
        <Button intent="white">
          <div class="flex w-full pl-2 items-center justify-between">
            <Typography intent="h2">game rules</Typography>
          </div>
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
