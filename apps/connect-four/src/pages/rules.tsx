import { CircledButton, Typography } from '@generalist/connect-four/ui';
import { useNavigate } from '@solidjs/router';
import { Component, onMount } from 'solid-js';

const RulesPage: Component = () => {
  // eslint-disable-next-line prefer-const
  let dialog: HTMLDialogElement | undefined = undefined;
  onMount(() => {
    dialog?.show();
  });

  const navigate = useNavigate();

  const howToPlay = [
    'Red goes first in the first game.',
    'Players must alternate turns, and only one disc can be dropped in each turn.',
    'The game ends when there is a 4-in-a-row or a stalemate.',
    'The starter of the previous game goes second on the next game.',
  ];

  return (
    <main class="h-screen overflow-hidden flex justify-center items-center bg-royal-purple">
      <dialog
        ref={dialog}
        class="bg-black w-[95%] rounded-t-[40px] rounded-b-[38px] h-[70%] relative"
      >
        <div class="outline-none gap-8 flex flex-col bg-white absolute h-[97.5%] rounded-t-[36px] rounded-b-[38px] pt-5 px-4 inset-1">
          <Typography intent="h1" class="uppercase text-center">
            Rules
          </Typography>
          <section class="flex flex-col gap-4">
            <Typography intent="h3" class="uppercase text-royal-purple">
              Objective
            </Typography>
            <Typography class="text-black/65" intent="p">
              Be the first player to connect 4 of the smae colored discs ihn a
              row (either vertically, horizontally, or diagonally).
            </Typography>
          </section>
          <section class="flex flex-col gap-4">
            <Typography intent="h3" class="uppercase text-royal-purple">
              How to play
            </Typography>
            <ol class="list-decimal-without-dot pl-4 list-outside">
              {howToPlay.map((rule) => (
                <li class="[&:not(last-child)]:mb-3">
                  <Typography
                    class="text-black/65 relative left-3 text-right inline"
                    intent="p"
                  >
                    {rule}
                  </Typography>
                </li>
              ))}
            </ol>
          </section>
        </div>
        <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10">
          <CircledButton onClick={() => navigate(-1)} />
        </div>
      </dialog>
    </main>
  );
};

export default RulesPage;
