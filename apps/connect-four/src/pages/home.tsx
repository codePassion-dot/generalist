import { Component } from "solid-js";
import {
  Button,
  Logo,
  PlayerVsPlayerIcon,
  Typography,
} from "@generalist/connect-four/ui";
import { A } from "@solidjs/router";

const HomePage: Component = () => {
  return (
    <main class="flex h-screen flex-col items-center justify-center gap-20 overflow-y-hidden bg-royal-purple">
      <header>
        <Logo />
      </header>
      <section class="mx-4 flex flex-col items-center gap-3 self-stretch">
        <Button intent="yellow">
          <div class="flex w-full items-center justify-between px-2">
            <Typography intent="h2">Play vs Player</Typography>
            <PlayerVsPlayerIcon />
          </div>
        </Button>
        <Button href="/rules" as={A} intent="white">
          <div class="flex w-full items-center justify-between pl-2">
            <Typography intent="h2">game rules</Typography>
          </div>
        </Button>
      </section>
    </main>
  );
};

export default HomePage;
