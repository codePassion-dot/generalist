import { Component } from "solid-js";
import {
  Button,
  Logo,
  PlayerVsPlayerIcon,
  Typography,
} from "@generalist/connect-four/ui";
import { A } from "@solidjs/router";

const Buttons: Component = () => {
  return (
    <>
      <Button href="/game-board" as={A} intent="yellow">
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
    </>
  );
};

const HomePage: Component = () => {
  return (
    <main class="flex h-screen flex-col items-center justify-center gap-20 overflow-y-hidden bg-violet-blue md:bg-royal-purple">
      <header class="md:hidden">
        <Logo />
      </header>
      <section class="mx-4 flex flex-col items-center gap-3 self-stretch md:hidden">
        <Buttons />
      </section>
      <section class="relative hidden h-[435px] w-[480px] rounded-b-[38px] rounded-t-[40px] bg-black md:block">
        <div class="absolute inset-1 flex h-[95%] flex-col items-center justify-between gap-4 rounded-b-[38px] rounded-t-[36px] bg-violet-blue px-10 py-12">
          <header class="mb-3">
            <Logo />
          </header>
          <div class="flex w-full flex-col gap-4">
            <Buttons />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
