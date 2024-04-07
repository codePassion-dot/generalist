import { CircledButton, Typography } from "@generalist/connect-four/ui";
import { useNavigate } from "@solidjs/router";
import { Component, onMount } from "solid-js";

const RulesPage: Component = () => {
  // eslint-disable-next-line prefer-const
  let dialog: HTMLDialogElement | undefined = undefined;
  onMount(() => {
    dialog?.show();
  });

  const navigate = useNavigate();

  const howToPlay = [
    "Red goes first in the first game.",
    "Players must alternate turns, and only one disc can be dropped in each turn.",
    "The game ends when there is a 4-in-a-row or a stalemate.",
    "The starter of the previous game goes second on the next game.",
  ];

  return (
    <main class="flex h-screen items-center justify-center overflow-hidden bg-royal-purple">
      <dialog
        ref={dialog}
        class="relative h-[70%] w-[95%] rounded-b-[38px] rounded-t-[40px] bg-black md:h-[580px] md:w-3/5 lg:w-[490px]"
      >
        <div class="absolute inset-1 flex h-[97.5%] flex-col gap-8 rounded-b-[38px] rounded-t-[36px] bg-white px-5 pt-5 outline-none">
          <Typography intent="h1" class="text-center uppercase">
            Rules
          </Typography>
          <section class="flex flex-col gap-4">
            <Typography intent="h3" class="uppercase text-royal-purple">
              Objective
            </Typography>
            <Typography class="text-black/65" intent="p">
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </Typography>
          </section>
          <section class="flex flex-col gap-4">
            <Typography intent="h3" class="uppercase text-royal-purple">
              How to play
            </Typography>
            <ol class="list-outside list-decimal-without-dot pl-4">
              {howToPlay.map((rule) => (
                <li class="[&:not(last-child)]:mb-3">
                  <Typography
                    class="relative left-3 inline text-right text-black/65"
                    intent="p"
                  >
                    {rule}
                  </Typography>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div class="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2">
          <CircledButton onClick={() => navigate(-1)} />
        </div>
      </dialog>
    </main>
  );
};

export default RulesPage;
